import React from "react";
import Pharma from '../assets/pharmaq.png';
import styles from './Leftnav.module.css';
const Leftnav=()=>{
    return (
        <div className={styles.leftnav}>
        <img src={Pharma} alt="ankit" className={styles.img}/>
        <div className={styles.logoname}>Pharmaquant<sup>TM</sup></div>
        <div className={styles.des}>Internal Tools</div>
        </div>
    );
}

export default Leftnav;