<h1 align="center">
    <img src="https://i.ibb.co/ScW6q6j/biostore.png" alt="Bio Store" width="300" style="margin-top: 32px; display:block; margin: auto" >
</h1>


<div align="center">

  [![GitHub](https://img.shields.io/github/license/Thalles-HsA/Inventory-MERN)](#licença)
  ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Thalles-HsA/Inventory-MERN)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-blue?style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/rayanargolo03/)](https://www.linkedin.com/in/thalleshsa/)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Thalles-HsA/Inventory-MERN?style=social)

</div>


<br>

# Índice 

- [Índice](#índice)
- [Descrição do Projeto](#descrição-do-projeto)
- [Visão Geral](#visão-geral)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Funcionalidades Previstas](#funcionalidades-previstas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Dependências do Backend](#dependências-do-backend)
  - [Dependências do Frontend](#dependências-do-frontend)
- [Instalação](#instalação)
  - [Backend:](#backend)
  - [Frontend:](#frontend)
  - [Script Nodemon](#script-nodemon)
  - [Arquivo .env](#arquivo-env)
- [Contribuição](#contribuição)
- [Licença](#licença)


<br>

# Descrição do Projeto

Somos Eco, Somos Tecnologia, Somos a BioStore
Este projeto foi desenvolvido para o último módulo do bootcamp Programadores Cariocas. Loja ecológica fictícia.

<br>

# Processo de Desenvolvimento

Criamos um vídeo para mostrar o processo de desenvolvimento desse projeto, desde front-end, back-end e treinos para a apresentação em turma.

<br>


# Funcionalidades Previstas

- CRUD dos produtos
- Pesquisa no banco de dados de cada produto;
- Listagem de produtos por tipo;

<br>

# Tecnologias Utilizadas

Nesse projeto utilizei da stack MERN em Typecript para o desenvolvimento

- React;
- MySQL;
- Mustache HTML;
- Node.js;
- API Rest;
- Typescript;

## Dependências do Backend


  - nodemon - (versão 2.0.22) devDepndencies
  - dotenv - (versão 16.0.3)

## Dependências do Frontend

  - react-redux - (versão 8.0.5)
  - formik - (versão 2.2.9)
  - typescript - (versão 4.4.4)
  - @types/node - (versão 18.15.11)
  - @types/react - (versão 18.0.33)
  - @types/react-dom - (versão 18.0.11)

<br>

# Instalação

Para instalar e executar este projeto, siga os seguintes passos:

- Clone este repositório em sua máquina local

## Backend:
1. Instale as dependências do projeto com o comando `npm install`
2. Inicie o servidor de desenvolvimento com o comando `npm run server`
3. Acesse o aplicativo no navegador no endereço `http://localhost:5000` ou utilize o Postman para testar as rostas

## Frontend:
1. Instale as dependências do projeto com o comando `npm install`
2. Inicie o servidor de desenvolvimento com o comando `npm start`
3. Acesse o aplicativo no navegador no endereço `http://localhost:3000`

>Lembrando que as pastas frontend e backend são projetos separados, lembre-se de acessar cada uma delas em seu terminal antes de rodar os camandos. 
>ATENÇÃO: A Versão 5.0.3 do TypeScript tem causado bug com a depêndencia react-script 5.0.1 portanto o projeto está usando a versão antiga 4.4.4. Caso tenha algum problema realacionado a isso desistale a versão recente do TS e instale a v4.4.4 que resolverá o problema. 
<br>

## Arquivo .env
- Criar um arquivo .env na raiz do seu projeto backend e definir as variáveis lá.

  Exemplo de configuração do .env: 

```javascript
  // Porta usada para conectar ao seu servidor backend
  PORT= 5000 
  // Dados de conexão do MongoDB
  DB_USER= Seu usuario no MongoDB
  DB_PASS= Sua senha no MongoDB
  DB_DB= endereço do servidor/nome do banco de dados // Copie tudo apos o @
```
> **ATENÇÃO:** Para manter as suas configurações seguras, é importante não compartilhar este arquivo publicamente no GitHub ou em qualquer outro lugar.
  <br>


>NOTA: Com essas configurações feita da maneira correta você já está pronto(a) para começar o desenvolvimento. Para confirmar se tudo está correto rode o comando dentro da pasta backend "npm run server" e veja no seu terminal aparecer "Conectou ao banco e dados!"
<br>
![gif](./gif.gif)

<br>

# Contribuição

Este projeto foi criado por Guilherme Medon, Rayan Argolo, Diogo Oliveira, Alexandre Braga, Airton Guedes. 

<br>

# Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
