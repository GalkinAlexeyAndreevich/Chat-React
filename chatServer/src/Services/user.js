import { connection } from "../Database/index.js";
export const getUsers = async () => {
  return await connection.query(`
        select * from users;
    `);
};

export const addUser = async (login_user, password_user) => {
  console.log(login_user, password_user);
  return await connection.query(
    `
    insert into users(login_user, password_user) values(
        ${JSON.stringify(login_user)},
        ${JSON.stringify(password_user)}
    );
    `.replace(/\"/g, "'")
  );
};

export const getUser = async (id) => {
  return await connection.query(
    `
        select * from users where id_user=${id};
    `.replace(/\"/g, "'")
  );
};
export const getUserOnLogin = async(login_user)=>{
  return await connection.query(
    `
        select * from users where login_user in(${JSON.stringify(login_user)});
    `.replace(/\"/g, "'")
  );
}
