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

export const editProduct = async (req: Request, res: Response) => {
    let Produtos = await Products.findAll()
    res.render("formProductControll", {
        Produtos
    })
};

export const AddProduct = async (req: Request, res: Response) => {
    let ProdutosTotal = await Products.findAll()
    let nome = req.body.nome_produto;
    let descricao = req.body.descricao_produto;
    let cor = req.body.cor_produto;
    let material = req.body.material_produto;
    let estoque = req.body.estoque_atual;
    let min_estoque = req.body.min_estoque;
    let tipo = req.body.tipo_produto;
    let vendas = req.body.vendas_totais;
    let link = req.body.link_img;
    let preco = req.body.valor;
    let valor_antigo = req.body.valor_antigo;
    let id = ProdutosTotal.length + 1;

    const novoproduto = Products.build({
        id,
        nome,
        descricao,
        cor,
        material,
        preco,
        estoque,
        min_estoque,
        tipo,
        vendas,
        link,
        valor_antigo
    })
    await novoproduto.save();

    let Produtos = await Products.findAll()
    res.redirect("/areadm")
};

export const delectProduct = async (req: Request, res: Response) => {
    let id = 1;

    let result = Products.findAll({
        where: {
            id
        }
    })
    res.redirect("/areadm")
};