import express from "express";
import signup from "./signup";

const app = express();
const port = 3000;

app.use("/signup", signup);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
