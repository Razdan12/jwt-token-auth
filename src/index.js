const express = require("express");
const dotenv = require("dotenv");
const app = express();
const UserControler = require("./User/UserControler")
const LoginControler = require("./Login/LoginControler")
dotenv.config();
app.use(express.json())
const PORT = process.env.PORT;

app.use("/user", UserControler )
app.use("/login", LoginControler)

app.listen(PORT, () => {
  console.log("server telah berjalan di port : ", PORT);
});
