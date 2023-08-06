import { usersDialogServices } from "../Services/index.js";
export const getUsersDialogs = async (req, res) => {
    let users = await usersDialogServices.getUsersDialogs();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
    res.send(users);
  };
  
  
export const getUsersDialog = async (req, res) => {
    let { id } = req.params;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
    let user = await usersDialogServices.getUsersDialog(id);
    res.send(user);
  };
