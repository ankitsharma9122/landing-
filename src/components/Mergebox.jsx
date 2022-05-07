import React from "react";
import Smallbox from "./Smallbox";
import BodyBox from "./BodyBox";
import styles from './Mergebox.module.css';
import Arrow from '../assets/leftarrow.png';
const MergeBox=()=>{
    return (
        <div className={styles.body}>
            <div className={styles.coloumbox}>
                <BodyBox/>
                 <img src={Arrow} alt="img" className={styles.downarrow}/>
                <Smallbox/>
                <img src={Arrow} alt="img" className={styles.downarrow}/>
                <Smallbox/>
                <img src={Arrow} alt="img" className={styles.downarrow}/>
                <Smallbox/>
                <img src={Arrow} alt="img" className={styles.downarrow}/>
                <BodyBox/>
            </div>
            <div className={styles.coloumbox}>
            <img src={Arrow} alt="img" className={styles.rightarrow}/>
            <img src={Arrow} alt="img" className={styles.rightarrow}/>
            <img src={Arrow} alt="img" className={styles.rightarrow}/>
            </div>
            <div className={styles.coloumbox}>
                <BodyBox/>
                <Smallbox/>
                <Smallbox/>
                <BodyBox/>
            </div>
            <div className={styles.coloumbox}>
                <BodyBox/>
                <div className={styles.gap}>
                <Smallbox/>
                </div>
                <Smallbox/>
            </div>
            <div className={styles.coloumbox}>
                <div className={styles.gap2}>
                <Smallbox/>
                </div>
                <Smallbox/>
            </div>
        </div>
    );
};

export default MergeBox;