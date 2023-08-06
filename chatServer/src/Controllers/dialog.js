import { dialogServices } from "../Services/index.js";
export const getDialogs = async (req, res) => {
  let dialogs = await dialogServices.getDialogs();
  res.send(dialogs);
};
export const addDialogsForTwo = async (req, res) => {
  console.log(req.body);
  let body = req.body;
  let post = await dialogServices.addDialogForTwo(
    body.id_first_user,
    body.id_second_user
  );

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.send(post);
};


export const getDialog = async (req, res) => {
  let { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  let dialog = await dialogServices.getDialog(id);
  res.send(dialog);
};
export const getDialogOnUser = async (req, res) => {
  let { id } = req.params;
  let dialog = await dialogServices.getDialogOnUser(id);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.send(dialog);
};