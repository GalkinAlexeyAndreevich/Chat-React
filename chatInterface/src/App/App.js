import React from "react";
import AsideBar from "../components/AsideBar";
// import ChatWindow from "../components/ChatWindow";
import MainWindow from "../components/MainWindow";
// import Message from "../components/Message";
// import Example from "../components/Routers/Routers";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <AsideBar />
      {/* <ChatWindow /> */}
      <Routes>
        <Route path="/chat/*" element={<MainWindow />} />
      </Routes>

      {/* <Message />
      <Example /> */}
    </div>
  );
}

export default App;
