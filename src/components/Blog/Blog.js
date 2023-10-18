import React from "react";
import styles from "./Blog.module.css"
import blog_1 from "../../images/blog_1.png"
import blog_2 from "../../images/blog_2.png"
import blog_3 from "../../images/blog_3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cardData = [
    {
        id: 1,
        img: blog_1,
        title: 'HOW HIKING HELPS BODY!',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore …',
        date: 'FEB 12, 2020',
    },
    {
        id: 2,
        img: blog_2,
        title: 'HOW HIKING HELPS BODY!',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore …',
        date: 'FEB 12, 2020',
    },
    {
        id: 3,
        img: blog_3,
        title: 'HOW HIKING HELPS BODY!',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore …',
        date: 'FEB 12, 2020',
    },
];

const Blog = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title_top}>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="3" viewBox="0 0 46 3" fill="none">
                    <path d="M45.4324 1.5H0.5" stroke="#CF4044" stroke-width="2" />
                </svg>
                <span style={{ marginLeft: "18px" }}>
                    OUR COACHES
                </span>
            </p>
            <button className={styles.blog_btn_more}>MORE ARTICLES</button>
            <p className={styles.title_body}>OUR RECENT ARTICLES</p>
            <div className={styles.grid_container}>
                {cardData.map((card, index) => (
                    <div className={`${styles.card}
                                    ${index === 0 ? styles.card_left : index === cardData.length - 1 ? styles.card_right : styles.card_center}`
                    }
                        key={card.index}>
                        <img src={card.img} alt={`Card ${card.id}`} className={styles.card_img}></img>
                        <div className={styles.card_body}>
                            <h2 className={styles.card_title}>{card.title}</h2>
                            <p className={styles.card_des}>{card.description}</p>
                            <div className={styles.card_footer}>
                                <p className={styles.card_date}>{card.date}</p>
                                <button className={styles.card_more_info_btn}>MORE INFO <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog