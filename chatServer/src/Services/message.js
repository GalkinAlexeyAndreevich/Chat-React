import { connection } from "../Database/index.js";
export const getMessages = async () => {
  return await connection.query(`
        select * from messageC;
    `);
};

export const addMessage = async (id_dialog,id_sender,content) => {
  console.log(id_dialog,id_sender,content);
  return await connection.query(
    `
    exec addMessage ${id_dialog},${id_sender},${JSON.stringify(content)};
    `.replace(/\"/g, "'")
  );
};

export const getMessage = async (id) => {
  return await connection.query(
    `
        select * from messageC where id_message=${id};
    `.replace(/\"/g, "'")
  );
};

export const getMessageOnDialog = async (id) => {
  return await connection.query(
    `
        select * from messageC where id_dialog=${id};
    `.replace(/\"/g, "'")
  );
};