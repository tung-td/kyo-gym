import React from "react";
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from "../../images/logo_kyo_gym.png"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer_nav}>
                <div className={styles.logo}>
                    <a href="#"><img src={logo}></img></a>
                    <p className={styles.logo_des}>
                        Discover your strongest self through the power of fitness. Join us and unlock a stronger, healthier you.
                    </p>
                </div>
                <div className={styles.nav_item}>
                    <h1 className={styles.item_title}>INFORMATION</h1>
                    <a href="#" className={styles.item_child}>ABOUT US</a>
                    <a href="#" className={styles.item_child}>NEWS</a>
                    <a href="#" className={styles.item_child}>CALCULATE IBM</a>
                </div>
                <div className={styles.nav_item}>
                    <h1 className={styles.item_title}>INFORMATION</h1>
                    <a href="#" className={styles.item_child}>ABOUT US</a>
                    <a href="#" className={styles.item_child}>NEWS</a>
                    <a href="#" className={styles.item_child}>CALCULATE IBM</a>
                </div>
                <div className={styles.subscribe}>
                    <h1 className={styles.item_title}>SUBSCRIBE TO NEWSLETTER</h1>
                    <input className={styles.item_email} placeholder="EMAIL"></input>
                    <button className={styles.btn_email}>SUBSCRIBE</button>
                </div>
            </div>
            <div className={styles.footer_nav_info}>
                <div className={styles.footer_info}>
                    <p className={styles.copyright}>Copyright @ 2023 All Rights Reserved.</p>
                    <p className={styles.phone}>+84 779 253  333</p>
                    <p className={styles.email}>info@kyogym.com</p>
                    <p className={styles.address}>Da Nang, Viet Nam</p>
                </div>
                <div className={styles.social}>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.social_icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.social_icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.social_icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.social_icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.social_icon} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer