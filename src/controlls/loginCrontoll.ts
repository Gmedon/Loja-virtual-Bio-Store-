import { Request, Response } from "express";
import { Op } from "sequelize";
import { Products } from "../models/Products";
import { Users } from "../models/Users";
import { Funcionario } from "../models/Funcionario";

export const LoginControll = (req: Request, res: Response) => {
  res.render("login");
};

export const LoginEfetuado = async (req: Request, res: Response) => {
  let emailinserido = req.body.email;
  let senhainserida = req.body.senha;
  let usuarios = await Users.findAll({
    where: {
      email: {
        [Op.like]: emailinserido,
      },
    },
  });
  let senhas = await Users.findAll({
    where: {
      senha: {
        [Op.like]: senhainserida,
      },
    },
  });
  if (usuarios.length > 0 && senhas.length > 0) {
    res.redirect("/areadm");
  }
};

export const AreaAdm = async (req: Request, res: Response) => {
  let addProductTrue = true;
  let urlmodifc = req.params.id;
  let Produtos = await Products.findAll();
  res.render("formProductControll", {
    Produtos,
    addProductTrue,
  });
};
