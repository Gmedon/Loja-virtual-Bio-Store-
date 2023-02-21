import { Request, Response } from "express"
import { Op } from "sequelize";

import { createObjectmenu } from "../helpers/ObjectMenu";
import { Products } from "../models/Products";

export const search = async (req: Request, res: Response) => {
    let query: string = await req.body.searchProduct as string;
    let tipoProduct = `Você pesquisou por "${query}"`
    let Produtos = await Products.findAll({
        where: {
            nome: {
                [Op.like]: `%${query}%`
            }
        }
    });
    res.render("landingPage", {
        menu: createObjectmenu(""),
        Produtos,
        tipoProduct
    })
};