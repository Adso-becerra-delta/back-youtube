import { Router } from "express";
import rutacanal from "./routes.canales.js";

const rout  = Router();

rout.use('/',rutacanal);

export default rout;