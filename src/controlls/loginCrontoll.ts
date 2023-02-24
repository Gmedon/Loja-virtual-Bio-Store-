import { Request, Response } from "express";
import { Products } from "../models/Products";

export const LoginControll = (req: Request, res: Response) => {
    res.render("login")
}



export const LoginEfetuado = (req: Request, res: Response) => {
    let email = "adm@gmail.com"
    let senha = "adm"
    let emailinserido = req.body.email;
    let senhainserida = req.body.senha;
    console.log(emailinserido)
    if (email == emailinserido && senha == senhainserida) {
       res.redirect("/areadm")
    }
}

export const AreaAdm = async (req: Request, res: Response) => {
    let Produtos = await Products.findAll()
    res.render("formProductControll", {
        Produtos
    })
}