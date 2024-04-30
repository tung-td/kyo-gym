import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Popover, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faXmark,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { collectionService } from "../../service/collectionService";
import { useAuth } from "../../AuthContext";
import styles from "./List_Day.module.css";
import { request } from "../../utils/axiosInstance";

const List_Day = () => {
  const [days, setDays] = useState(null);
  const { courseId, dayId } = useParams();
  const containerRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(1);
  const [anchorEl, setAnchorEl] = useState(document.body);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [userIdData, setUserIdData] = useState(null);

  const [reviewPopupOpen, setReviewPopupOpen] = useState(false);

  const closeReviewPopup = () => {
    setReviewPopupOpen(false);
  };

  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await request.get("/customer/detail");
        setUserData(res);
        const lastRecommendedCourse =
          res.recommendedCourses[res.recommendedCourses.length - 1];
        console.log("lastRecommendedCourse", lastRecommendedCourse);
        setUserIdData(lastRecommendedCourse.userDataId);
      } catch (error) {
        console.log("Error fetching user information", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  useEffect(() => {
    const getDaysOfCourse = async () => {
      try {
        const daysOfCourse = await collectionService.getDays(courseId);
        setDays(daysOfCourse.days);
      } catch (err) {
        console.log(err);
      }
    };
    getDaysOfCourse();
  }, [courseId]);

  console.log(days);

  const submitReview = async (effectiveness) => {
    try {
      const course = userIdData;

      const reviewData = {
        effective: effectiveness,
      };

      await collectionService.putReviewCourse(course, reviewData);
      closeReviewPopup();
    } catch (error) {
      console.error("Error submitting course review", error);
    }
  };

  const location = useLocation();
  const isReviewPopupVisible =
    location.pathname === `/collections/${courseId}/days/10`;

  const handleCardClick = (dayId, event) => {
    setSelectedCard(dayId);
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const openPopup = (event) => {
    setAnchorEl(event ? event.currentTarget : document.body);
  };

  const closePopup = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const st = window.scrollY;

    // if (st < lastScrollTop || lastScrollTop === 0) {
    //   openPopup();
    // } else {
    //   closePopup();
    // }

    setLastScrollTop(st);
  };

  const showReviewPopup = () => {
    setReviewPopupOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.List_Day_container}>
      <Button onClick={openPopup} style={{ color: "#fff", fontSize: "17px" }}>
        Days
        <FontAwesomeIcon
          icon={faCalendarCheck}
          color="#37383c"
          style={{
            marginLeft: "6px",
            marginBottom: "5px",
            color: "#fff",
            fontSize: "17px",
          }}
        />
      </Button>

      {isReviewPopupVisible && (
        <Button
          onClick={showReviewPopup}
          style={{ color: "#fff", fontSize: "17px", marginLeft: "10px" }}
        >
          Show Review
        </Button>
      )}

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopup}
        disableScrollLock={true}
        classes={{
          paper: styles.popoverPaper,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <Typography variant="h6">Choose Days</Typography>
            <Button className={styles.popupClose} onClick={closePopup}>
              <FontAwesomeIcon icon={faXmark} style={{ color: "#37383c" }} />
            </Button>
            <div className={styles.popupDays}>
              {days &&
                Array.isArray(days) &&
                days.map((day) => (
                  <Link
                    key={day.dayId}
                    to={`/collections/${courseId}/days/${day.dayId}`}
                    className={`${styles.popupDay} ${
                      selectedCard === day.dayId ? styles.selectedCard : ""
                    } ${day.status !== true ? styles.disabledCard : ""}`}
                    onClick={() => {
                      handleCardClick(day.dayId);
                      closePopup();
                    }}
                  >
                    {day.dayName}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Popover>

      <Popover open={reviewPopupOpen} onClose={closeReviewPopup}>
        <div className={styles.reviewPopup}>
          <Typography variant="h6">Review Course Effectiveness</Typography>
          <div className={styles.reviewButtons}>
            <Button onClick={() => submitReview(true)}>Yes</Button>
            <Button onClick={() => submitReview(false)}>No</Button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default List_Day;
