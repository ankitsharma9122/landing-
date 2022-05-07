import React from "react";
import styles from './BodyBox.module.css';
const Smallbox=()=>{
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.icon}>
                <i class='fas fa-edit'></i>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </div>
        </div>
    );
}
export default Smallbox;