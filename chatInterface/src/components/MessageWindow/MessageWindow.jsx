import React from "react";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import MessageBody from "./MessageBody";
import { useParams } from "react-router-dom";
import styles from "./MessageWindow.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesThunk } from "../../models/message";


function MessageWindow() {
  const { id } = useParams();
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getMessagesThunk({id_dialog:id}))
  })
  const dialogs = useSelector(state=>state.user.dialogs)
  
  
  if(!dialogs){
    return
  }
  let Current = dialogs.find((el) => Number(el.dialog.id_dialog) === Number(id));
  if (!Current) {
    Current = {};
  }
  return (

    <div className={styles.container}>
      <MessageHeader
        key={Current.dialog.id_dialog}
        nameUser={Current.secondUser.login}
      />
      <MessageBody  />
      <MessageInput  />
    </div>
  );
}

export default MessageWindow;
