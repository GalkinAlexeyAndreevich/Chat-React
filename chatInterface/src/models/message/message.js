import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import  {message} from "../../components/api";

const initialState = {
    messages:null,
};

const slice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages(state, { payload }) {
      const {messages} = payload
      state.messages = messages
    },
    addMessage(state,{payload}){
      const {message} = payload
      state.messages = [...state.messages,message]
    }
  },
});

export const getMessagesThunk = createAsyncThunk(
  "message/getMessages",
  async ({id_dialog}, { dispatch }) => {
    let messages = await message.getMessageOnDialog(id_dialog)
    dispatch(slice.actions.setMessages({messages:messages}))
  }
    
);
export const addMessageThunk = createAsyncThunk(
  "message/addMessage",
  async ({id_dialog,id_sender,content}, { dispatch }) => {
    console.log(id_dialog,id_sender,content);
    let res = await message.addMessage(id_dialog,id_sender,content)
    if(res){
      dispatch(getMessagesThunk({id_dialog:id_dialog}))
    }
  }
    
);


export const { reducer: messageReducer } = slice;
export const { actions: messageActions } = slice;
