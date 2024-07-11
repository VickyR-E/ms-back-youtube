import { Router } from "express";

const rutacanal = Router();

rutacanal.get("/", (req, res)=>{
    res.json({"application":"Youtube"})
})

rutacanal.get("/canal", (req, res)=>{
    res.json({
        "msg":"hola mundo",
        "user":"Victoria",
        "aplicacion":"Youtube",
        "type":"backend"
    })
});

export default rutacanal;