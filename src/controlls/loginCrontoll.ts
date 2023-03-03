import { Request, Response } from "express";
import { Op } from "sequelize";
import { Products } from "../models/Products";
import { Users } from "../models/Users";

export const LoginControll = (req: Request, res: Response) => {
    res.render("login")
}



export const LoginEfetuado = async (req: Request, res: Response) => {
    let emailinserido = req.body.email;
    let senhainserida = req.body.senha;
    let usuarios = await Users.findAll({
        where: {
            email: {
                [Op.like]: emailinserido
            }
        }
    })
    let senhas = await Users.findAll({
        where: {
            senha: {
                [Op.like]: senhainserida
            }
        }
    })
    if (usuarios.length > 0 && senhas.length > 0) {
        res.redirect("/areadm")
    }
}

export const AreaAdm = async (req: Request, res: Response) => {
    let disable = true
    let Produtos = await Products.findAll()
    res.render("formProductControll", {
        Produtos,
        disable
    })
}