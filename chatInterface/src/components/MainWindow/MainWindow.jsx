import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatWindow from "../ChatWindow";

import Message from "../MessageWindow";
import {getDialogsThunk} from "../../models/user"

import styles from "./MainWindow.module.css";
import { useDispatch, useSelector } from "react-redux";

function MainWindow() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state=>state.user.idCurrentUser)
  React.useEffect(()=>{
    dispatch(getDialogsThunk({id_user:currentUser}))
  },[currentUser,dispatch])
  return (
    <main className={styles.main}>
      <ChatWindow />
      <Routes>
        <Route path=":id" element={<Message />} />
      </Routes>
    </main>
  );
}

export default MainWindow;
