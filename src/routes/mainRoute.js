
const { Router } = require("express")
const mainRouter = Router();


mainRouter.use("/login", (req,res)=>{
    res.send("soy la ruta login")
})


module.exports = mainRouter;