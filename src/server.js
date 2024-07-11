import express from "express";
import rout from "./routes/index.js";

const server = express();

server.set('port', process.env.PORT || 4550);

server.get('/',rout)

export default server;