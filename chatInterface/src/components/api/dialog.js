export const  getDialogOnUser =  async (id_user)=> {
  return await fetch(`http://localhost:4444/dialog/getOnUser/${id_user}`, {
    mode: "cors",
    method: "get",
  })
      .then((response) => {
      return response.text();
    })
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      return data.recordset;
    })
    .catch(function (error) {
      console.log(error);
    });

};
export const getUsersOnDialog = async(id_dialog)=>{
  return await fetch(`http://localhost:4444/usersDialog/${id_dialog}`, {
    mode: "cors",
    method: "get",
  })
      .then((response) => {
      return response.text();
    })
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      return data.recordset;
    })
    .catch(function (error) {
      console.log(error);
    }); 
} 