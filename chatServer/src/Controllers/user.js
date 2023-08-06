import { userServices } from "../Services/index.js";
export const getUsers = async (req, res) => {
  let users = await userServices.getUsers();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.send(users);
};

export const addUser = async (req, res) => {
  console.log(req.body);
  let body = req.body;
  let post = await userServices.addUser(
    body.login_user,
    body.password_user
  );

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.send(post);
};

export const getUser = async (req, res) => {
  let { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  let user = await userServices.getUser(id);
  res.send(user);
};
export const getUserOnLogin = async (req, res) => {
  console.log(req.body);
  let { login } = req.params;
  let user = await userServices.getUserOnLogin(login);
  res.send(user);
};

