import React from "react";
import styles from "./MessageBody.module.css";
import {useSelector} from "react-redux"

function MessageBody() {
  const messages = useSelector(state=>state.message.messages)
  const currentUser = useSelector(state=>state.user.idCurrentUser)

  return (
    <div className={styles.container}>
      {messages?messages.map((item, index) => {
        return (
          <div className={currentUser==item.id_sender?styles.itemYour:styles.item} key={index}>
            {/* <div>
              <img src="../UserLogo2.png" alt="" />
            </div> */}
            <div className={styles.MessageContent} >
              {item.content}
            </div>
          </div>
        );
      }):null}
    </div>
  );
}
export default MessageBody;
