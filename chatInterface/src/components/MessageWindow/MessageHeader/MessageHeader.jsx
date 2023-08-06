import React from "react"
import styles from "./MessageHeader.module.css"
function MessageHeader({photo,nameUser,whatDo}){
    return(

        <div className={styles.header}>
            <div className={styles.person}>
                <img src={photo} alt="" />
                <div className={styles.infoUser}>
                    <div className={styles.nameStatus}>
                        <p>{nameUser}</p>
                        <div className={styles.WhatDo}>
                            {/* <img src="" alt="" /> */}
                            <p>{whatDo}</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button><img src="../attach-2.svg" alt="" /></button>
                        <button><img src="../more-vertical.svg" alt="" /></button>
                    </div>
               
                </div>
            </div>

        </div> 
    )
}

export default MessageHeader