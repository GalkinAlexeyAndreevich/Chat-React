import mssql from "mssql/msnodesqlv8.js";
export const connection = await mssql.connect({
  database: "chat",
  server: "GALKINALEXEY",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
  bigIntAsNumber: true,
  insertIdAsNumber: true,
});
