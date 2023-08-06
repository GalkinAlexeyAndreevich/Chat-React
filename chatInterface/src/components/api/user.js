export const getUsers = async () => {
    return await fetch("http://localhost:4444/user", {
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
  export const getUser = async (id_user) => {
    return await fetch(`http://localhost:4444/user/${id_user}`, {
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