// Link to={href},
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDialogsThunk } from "../../../../models/user";

import styles from "./NavigationItem.module.css";

function NavigationItem({ href, label, icon }) {
  const dispatch = useDispatch()
  const id_user = useSelector(state=>state.user.idCurrentUser)
  return (
    <div onClick={()=>{
        dispatch(getDialogsThunk({id_user:id_user}))
        console.log(123);
      }
    }>
          <NavLink
      className={({ isActive }) =>
        isActive ? styles.activClassName : styles.item
      }
      to={href}
    >
      <img src={icon} alt=""/> {label}
    </NavLink>
    </div>

  );
}

export default NavigationItem;
