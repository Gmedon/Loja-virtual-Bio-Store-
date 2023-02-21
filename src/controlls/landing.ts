import { Request, Response } from "express";
import { Op } from "sequelize";

import { Products } from "../models/Products";
import { createObjectmenu } from "../helpers/ObjectMenu";

export const GetProductLanding = async (req: Request, res: Response) => {
    let tipoProduct = "Mais vendidos"
    let Produtos = await Products.findAll({
        where: {
            vendas: {
                [Op.gte]: 10
            }
        }
    });

    res.render("landingPage", {
        menu: createObjectmenu(""),
        Produtos,
        tipoProduct
    })
}

export const GetProductsBolsas = async (req: Request, res: Response) => {
    let tipoProduct = "Bolsas"
    let Produtos = await Products.findAll({
        where: {
            tipo: {
                [Op.like]: "Bols%"
            }
        }
    })
    res.render("landingPage", {
        tipoProduct,
        menu: createObjectmenu("Bolsa"),
        Produtos
    })
}

export const GetProductsOculos = async (req: Request, res: Response) => {
    let tipoProduct = "Óculos"
    let Produtos = await Products.findAll({
        where: {
            tipo: {
                [Op.like]: "ocul%"
            }
        }
    })
    res.render("landingPage", {
        tipoProduct,
        menu: createObjectmenu("Oculos"),
        Produtos
    })
}

export const GetProductsCamisas = async (req: Request, res: Response) => {
    let tipoProduct = "Camisas"
    let Produtos = await Products.findAll({
        where: {
            tipo: {
                [Op.like]: "camis%"
            }
        }
    })
    res.render("landingPage", {
        menu: createObjectmenu("Camisa"),
        tipoProduct,
        Produtos
    })
}

export const GetProductsTenis = async (req: Request, res: Response) => {
    let tipoProduct = "Tênis"
    let Produtos = await Products.findAll({
        where: {
            tipo: {
                [Op.like]: "teni%"
            }
        }
    })
    res.render("landingPage", {
        menu: createObjectmenu("Tenis"),
        tipoProduct,
        Produtos
    })
}

export const GetProductsToalhas = async (req: Request, res: Response) => {
    let tipoProduct = "Toalhas"
    let Produtos = await Products.findAll({
        where: {
            tipo: {
                [Op.like]: "Toalha%"
            }
        }
    })
    res.render("landingPage", {
        menu: createObjectmenu("Toalha"),
        tipoProduct,
        Produtos
    })
}