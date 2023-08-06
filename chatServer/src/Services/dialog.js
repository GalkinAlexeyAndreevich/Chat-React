import { connection } from "../Database/index.js";
export const getDialogs = async () => {
  return await connection.query(`
        select * from dialog;
    `);
};

export const addDialogForTwo = async (id_first_user,id_second_user) => {
  console.log(id_first_user,id_second_user);
  return await connection.query(
    `
    exec addDialogForTwo ${id_first_user},${id_second_user};
    `.replace(/\"/g, "'")
  );
};

export const getDialog = async (id) => {
  return await connection.query(
    `
        select * from dialog where id_dialog=${id};
    `.replace(/\"/g, "'")
  );
};
export const getDialogOnUser = async(id)=>{
  return await connection.query(
    `
      select * from dialog where id_dialog in (select id_dialog from usersDialog where id_user=${id});
    `.replace(/\"/g, "'")
  );
}

