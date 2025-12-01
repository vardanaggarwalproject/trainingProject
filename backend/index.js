import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import dotenv from "dotenv";
const App = express();
// const io = new Server(App);
dotenv.config({});

const server = createServer(App);

const port = process.env.PORT || 8000;

const io = new Server(server, {});

App.get("/", (req, res) => {
  res.status(200).json({ message: "at home page" });
});

server.listen(port, () => {
  console.log(`server listening at ${port}`);
});

io.on("connection", (socket) => {
  console.log(`A user connected with ${socket.id}`);

});
