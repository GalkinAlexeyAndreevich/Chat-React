import React from "react";
import ChatHeader from "./ChatHeader";
import ChatSearch from "./ChatSearch/ChatSearch";
import ChatMessage from "./ChatMessage";
import styles from "./ChatWindow.module.css";
import { useDispatch, useSelector } from "react-redux";
import {getMessagesThunk} from "../../models/message"
import {userActions} from "../../models/user"


// let arrMessages = [
//   {
//     id: 2,
//     icon: "./UserLogo2.png",
//     nameUser: "Jared Sunn",
//     whatDo: "records voice message",
//     lastMessage: "1 minutes ago",
//     voice: "01:15",
//     file: 2,
//     photo: 1
//   },
// ];

function ChatWindow() {
  const dispatch = useDispatch()
  const dialogs = useSelector(state=>state.user.dialogs)


  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatSearch />
      <nav>
        <ul className={styles.list}>
          {dialogs?dialogs.map(
            ({
              dialog,
              secondUser
            }) => (
              <li key={dialog.id_dialog} className={styles.listItem}>
                <div onClick={()=>{
                  dispatch(getMessagesThunk({id_dialog:dialog.id_dialog}))
                  dispatch(userActions.setCurrentDialog({id_dialog:dialog.id_dialog}))
                }}>
                  <ChatMessage href={"chat/"+dialog.id_dialog} nameUser={secondUser.login}/>
                </div>
                
              </li>
            )
          ):null}
        </ul>
      </nav>
    </div>
  );
}

export default ChatWindow;
