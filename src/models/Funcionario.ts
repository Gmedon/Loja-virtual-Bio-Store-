import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

interface FuncType extends Model {
  id: number;
  nome: string;
  cpf: string;
  idade: string;
  sexo: string;
  login: string;
  senha: string;
}

export const Funcionario = sequelize.define<FuncType>(
  "funcionarios",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    },
    sexo: {
      type: DataTypes.STRING,
    },
    login: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "funcionarios",
    timestamps: false,
  }
);
