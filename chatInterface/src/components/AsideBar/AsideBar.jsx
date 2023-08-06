import React from "react";
import Navigation from "./Navigation";
import User from "./User";
import styles from './AsideBar.module.css'
import LogOutBtn from "./LogOutBtn";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../models/user";
function AsideBar(){
    const currentUser = useSelector(state=>state.user.idCurrentUser)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getUserThunk({id_user:currentUser}))
    },[currentUser,dispatch])
    return (
        <aside className={styles.asideBar}>
            {/* <img/> */}
            <User />
            <Navigation />
            <LogOutBtn label={"LOG OUT"} icon={"power.png"} />
            

        </aside>
    )

}
export default AsideBar;