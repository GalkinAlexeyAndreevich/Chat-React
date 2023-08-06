import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {dialog} from "../../components/api"
import { getUser } from "../../components/api/user";

const initialState = {
    idCurrentUser:1,
    userInfo:null,
    dialogs:null,
    currentDialog:0
};


const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDialogs(state, { payload }) {
      const {dialogs} = payload
      state.dialogs = dialogs
    },
    setCurrentDialog(state,{payload}){
      const {id_dialog} = payload
      state.currentDialog = id_dialog
    },
    setUserInfo(state,{payload}){
      const {user} = payload
      state.userInfo = user
    }
  },
});
export const getUserThunk = createAsyncThunk(
  "user/getUser",
  async({id_user},{dispatch}) =>{
    const user = await getUser(id_user)
    if(user){
      dispatch(slice.actions.setUserInfo({user:user}))
    }
  }
)

export const getDialogsThunk = createAsyncThunk(
  "user/getDialogs",
  async ({id_user}, { dispatch }) => {
    console.log(id_user)
    let fullInfo=[]
    let dialogs = await dialog.getDialogOnUser(id_user)
    if(!dialogs){
      return
    }
    for(let item of dialogs){
      let listUsers =await dialog.getUsersOnDialog(item.id_dialog)
      let user = null
      if(Number(item.dialog_status) === 0){
       
        for(let item1 of listUsers){
          if(item1.id_user!==id_user){
              let data = await getUser(item1.id_user)
              user = {
                login:data[0].login_user,
                photo:data[0].photo
              }
          }
        }
      }
      let obj = {dialog:item,usersDialog:listUsers,secondUser:user}
      fullInfo.push(obj)    
    }
    console.log(fullInfo);
    dispatch(slice.actions.setDialogs({dialogs:fullInfo}))
  }
);


export const { reducer: userReducer } = slice;
export const { actions: userActions } = slice;
