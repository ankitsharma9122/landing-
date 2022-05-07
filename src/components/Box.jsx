import React from "react";
import styles from './Box.module.css';
import left from '../assets/leftarrow.png';
const Box=()=>{
    return (
        <div className={styles.main}>
            <div className={styles.leftdiv}>
                 <img src={left} alt="pic" className={styles.img}/>  
                 <div className={styles.coloum}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightmenu}>Logs</div> 
              <div className={styles.rightmenu}>Downloads</div> 
            </div>
        </div>
    );
}
export default Box;