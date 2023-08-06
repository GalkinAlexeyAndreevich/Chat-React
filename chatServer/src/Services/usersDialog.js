import { connection } from "../Database/index.js";
export const getUsersDialogs = async()=>{
    return await connection.query(
      `
          select * from usersDialog;
      `.replace(/\"/g, "'")
    );
  }
export const getUsersDialog = async(id)=>{
    return await connection.query(
      `
          select * from usersDialog where id_dialog=${id};
      `.replace(/\"/g, "'")
    );
  }
  
  