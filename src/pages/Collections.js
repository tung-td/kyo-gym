import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Collections_card from "../components/Collections_card/Collections_card";
import Sidebar from "../components/Sidebar/Sidebar";
import { useAuth } from "../AuthContext";
import { request } from "../utils/axiosInstance";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await request.get("/customer/detail");
        const uniqueRecommendedCourses = res.recommendedCourses.filter(
          (course) => course.recommendedStatus
        );

        setUserData({
          ...res,
          recommendedCourses: uniqueRecommendedCourses,
        });
      } catch (error) {
        console.log("Error fetching user information", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div style={{ backgroundColor: "#f0ece8" }}>
      <Header />
      <div style={{ display: "flex", padding: "15px" }}>
        <Sidebar onCategoryChange={handleCategoryChange} />
        <div style={{ maxWidth: "1400px" }}>
          <Collections_card
            selectedCategory={selectedCategory}
            recommendedCourses={userData.recommendedCourses}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
