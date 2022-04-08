const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {cors: {origin: "*"}});




app.get("/home", (req,res)=>{

    res.status(200).sendFile(__dirname + "/index.html");
});


server.listen(4000, ()=>{
    console.log("server is running successfully");
});


io.on("connection", (socket)=>{

    console.log("user connected " + socket.id);


    // data = [];
    socket.on("message", (data)=>{

        console.log(data);
        socket.broadcast.emit("message", data);
    });

});