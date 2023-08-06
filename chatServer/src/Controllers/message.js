import { messageServices } from "../Services/index.js";
export const getMessages = async (req, res) => {
  let messages = await messageServices.getMessages();
  res.send(messages);
};

export const addMessage = async (req, res) => {
  console.log(req.body);
  let body = req.body
  let post = await messageServices.addMessage(
    body.id_dialog,
    body.id_sender,
    body.content,
  );

  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.send(post);
};

export const getMessage = async (req, res) => {
  let { id } = req.params;
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  let message = await messageServices.getMessage(id);
  res.send(message);
};
export const getMessageOnDialog = async (req, res) => {
  let { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  let message = await messageServices.getMessageOnDialog(id);
  res.send(message);
};