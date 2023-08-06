import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addMessageThunk} from "../../../models/message"

import styles from "./MessageInput.module.css";

function MessageInput() {
  const dispatch = useDispatch()
  const id_dialog = useSelector(state=>state.user.currentDialog)
  const currentUser = useSelector(state=>state.user.idCurrentUser)
  const messageRef = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <button className={styles.btn}>
          <img src="../plus.svg" alt="" />
        </button>
        <input
          className={styles.messageInput}
          type="text"
          placeholder="Type a message here"
          ref={messageRef}
        />
        <button className={styles.smileBtn}>
          <img src="../smileIcon.png" alt="" />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            console.log(currentUser);
            dispatch(addMessageThunk({
              id_dialog:id_dialog,
              id_sender:currentUser,
              content:messageRef.current.value
            }))
            messageRef.current.value=""
          }}
        >
          <img src="../Send-icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
