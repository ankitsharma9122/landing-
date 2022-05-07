import React from "react";
import styles from './Rightnav.module.css';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
const Rightnav=()=>{
    return (
        <div className={styles.rightnav}>
        <Switch/>
        <Avatar src="/broken-image.jpg" className={styles.img}/>
        </div>
    );
}

export default Rightnav;