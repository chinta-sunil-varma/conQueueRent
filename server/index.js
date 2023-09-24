const express = require("express");
const mongoose=require("mongoose");
require('dotenv').config()
const SocketUtility = require("./routes/socket/SocketUtility");
const genUtility=require('./routes/general/genUtility.js')
const app = express();

const http = require("http").createServer(app);
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('connected to the database')
  http.listen(5000, () => {
    console.log("server is up and running in port 5000");
  });
 
}

/*setting up the CORS for the domain

      CORS works the following way:-

      cors is present due the same origin policy of the browswers i.e js can only make call to the server which have rendered the file
      initially becoz to prevent the xss (cross site scripting)

      initially the client make a preflight request to the cross server and the cross server will send  response along with the header
      ACCESS CONTROL ALLOW ORIGIN  which contains the list of the origins allowed to request to the server
      
      if the origin server is not in the acess control allow origin header then the browser throws the error (CORS)






*/

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * 
 * the /api/socket contains the routes specially for the socket related tasks
 * the /api contains general pourpose routes
 */
app.use("/api", genUtility);
app.use("/api/socket", SocketUtility);



const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log("New Client is Connected!");

});




