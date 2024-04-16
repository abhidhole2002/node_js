// console.log("server file is running");

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.table(user);
// console.log(user);

// fs.appendFile("demo.txt", `this is message for ${user.username}\n`, () =>
//   console.log("ok")
// );

//! import and export
// const data = require("./demo.js");
// // console.log(data);

// console.log(data.a + data.b);
// console.log(data.func(100, 200));

//! sever creation

const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();


const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Menu = require("./model/menu");

app.get("/", function (req, res) {
  res.send("server 1");
});


const UserRoutes = require("./Routes/UserRoute");
const MenuRoutes = require("./Routes/MenuRoutes");

app.use("/user", UserRoutes);
app.use("/menu", MenuRoutes);


const PORT = parseInt(process.env.PORT) || 3000
app.listen(PORT, () => {
  console.log("server is listening at port 3000");
});
