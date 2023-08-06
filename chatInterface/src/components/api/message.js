export const getMessageOnDialog = async (id_dialog) => {
    return await fetch(`http://localhost:4444/message/onDialog/${id_dialog}`, {
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
export const addMessage = async (id_dialog,id_sender,content) => {
    return await fetch(`http://localhost:4444/message/`, {
      mode: "cors",
      method: "post",
      body: JSON.stringify({
        id_dialog: Number(id_dialog),
        id_sender: Number(id_sender),
        content: content,
      }),
    })
      .catch(function (error) {
        console.log(error);
      });
  };