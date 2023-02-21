import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";

import RotasPrincipais from "./routes/RotasPrincipais"

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")))

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.urlencoded({ extended: true }))

server.use(RotasPrincipais)

server.listen(process.env.PORT)