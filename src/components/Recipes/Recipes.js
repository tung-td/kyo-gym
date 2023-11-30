import React from "react";
import styles from "./Recipes.module.css"

import food_re from "../../images/food_re.png"
import food_re1 from "../../images/food_re1.png"
import food_re2 from "../../images/food_re2.png"
import food_re3 from "../../images/food_re3.png"
import food_re4 from "../../images/food_re4.png"

const Recipes = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>RECIPES</p>
            <div className={styles.body}>
                <div className={styles.body_left}>
                    <img alt="food" src={food_re} ></img>
                </div>
                <div className={styles.body_center}>
                    <p className={styles.body_title}>Protein-packed power bowl</p>
                    <p className={styles.body_des}>A colorful protein-packed power bowl filled with flavorful.
                        Completed with a healthy and delicious satay dipping sauce and crushed roasted peanuts.
                        Delicious!
                    </p>
                    <button className={styles.body_btn}>View Full Recipe</button>
                </div>
                <div className={styles.body_right}>
                    <div className={styles.body_right_item}>
                        <img alt="food" src={food_re1}></img>
                        <p>High Protein Recipes</p>
                    </div>
                    <div className={styles.body_right_item}>
                        <img alt="food" src={food_re2}></img>
                        <p>High Protein Recipes</p>
                    </div>
                    <div className={styles.body_right_item}>
                        <img alt="food" src={food_re3}></img>
                        <p>High Protein Recipes</p>
                    </div>
                    <div className={styles.body_right_item}>
                        <img alt="food" src={food_re4}></img>
                        <p>High Protein Recipes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes