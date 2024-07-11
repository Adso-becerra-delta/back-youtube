import { Router } from "express";

const rutacanal = Router();

rutacanal.get("/canal",(req, res) => {
    res.json({
        "msg":"hola mundo",
        "user":"jnssan",
        "application":"Youtube",
        "type":"Backend"
    });
});

rutacanal.get('/',(req, res) => {
    res.json({
        "application":"Youtube"
    });
});


export default rutacanal;