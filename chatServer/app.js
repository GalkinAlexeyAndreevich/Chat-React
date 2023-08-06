import express from "express";
import { appRouter } from "./src/Routers/index.js";
import { connection } from "./src/Database/index.js";

const app = express();
const port = 4444;
app.use(express.json({ type: ["application/json", "text/plain"] }));
app.use("/", appRouter);
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "origin, content-type, accept");

  next();
});

app.listen(port, async () => {
  console.log(`Port is ${port}`);
  if(connection){
    console.log("work")
  }
});
