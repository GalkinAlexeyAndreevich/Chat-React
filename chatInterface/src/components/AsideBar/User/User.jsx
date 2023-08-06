import React from "react";
import { useSelector } from "react-redux";
import styles from './User.module.css'
function User(){
    const userInfo = useSelector(state=>state.user.userInfo)
    const [isLoad,setIsLoad] = React.useState(false)
    
    React.useEffect(()=>{
        if(!userInfo)return
        setIsLoad(true)
    },[userInfo])
 return(
    isLoad?
    <div className={styles.user}>
        {/* <div className={styles.userPhoto}>
            <img src={} alt="" />
        </div> */}
        
        <p className={styles.nameUser}>{userInfo[0].login_user}</p>
    </div>:null
    
 )
}
export default User
