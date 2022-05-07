import React from "react";
// import {AddCardIcon} from '@mui/icons-material';
import styles from './BodyBox.module.css';
const BodyBox=()=>{
    return (
        <div>
            
            <div className={styles.box}>
                <div className={styles.icon}>
                <i class='fas fa-edit'></i>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iure quis laborum optio nisi et, minima rerum ullam laboriosam,
            </div>
        </div>
    );
}
export default BodyBox;