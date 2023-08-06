import React from "react";

import styles from "./LogOutBtn.module.css";

function LogOutBtn({label, icon}){
    return(
        <button className={styles.button}>
            <img src={icon} alt="" />
            <span>{label}</span>
        </button>
    );
}

export default LogOutBtn;