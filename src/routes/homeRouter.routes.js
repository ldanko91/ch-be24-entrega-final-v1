import { Router } from "express";
const homeRouter = Router();

homeRouter.get('/',  async (req, res) => {
    res.render('home', {
        title: `Bienvenido al E-Commerce`
    })
})

export default homeRouter