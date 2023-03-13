-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Mar-2023 às 18:35
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `loja`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `idade` int(3) NOT NULL,
  `sexo` varchar(25) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `cor` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL,
  `preco` int(30) NOT NULL,
  `estoque` int(255) NOT NULL,
  `min_estoque` int(255) NOT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `vendas` int(10) NOT NULL DEFAULT 0,
  `link` varchar(255) DEFAULT NULL,
  `valor_antigo` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `cor`, `material`, `preco`, `estoque`, `min_estoque`, `tipo`, `vendas`, `link`, `valor_antigo`) VALUES
(1, 'Ocean', 'Fabricada ecológicamentea partir da reutilização de tecidos reciclados', 'Azul', 'Tecido', 70, 40, 2, 'Bolsa', 5, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188695/OCEAN_h7jipk.png', 90),
(2, 'Suck', 'Bolsa desenvolvida \r\na partir do reaproveitamento de garrafas PET', 'Branca', 'Garrafa', 80, 35, 2, 'Bolsa', 10, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188750/SUCK_rnwy1c.png', 120),
(3, 'Sunshine', 'Bolsa social de fibras de bambu', 'Fade', 'Bambu', 120, 30, 2, 'Bolsa', 12, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188777/SUNSHINE_ctluvk.png', 160),
(4, 'Lilworld', 'Bolsa durável e elegante \r\na partir de tecidos de algodão orgânico e tingimentos naturais', 'Preta', 'Algodão', 90, 25, 2, 'Bolsa', 9, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188807/LILWORLD_cl73n0.png', 184),
(5, 'Afrobege', 'Desenvolvida a partir da\r\nreutilização de sacos de café usados', 'Marrom', 'Sacos', 120, 29, 2, 'Bolsa', 4, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188826/AFROBEGE_kuo5ea.png', 137),
(6, 'Nature', 'Criada a partir da \r\nreutilização de lonas de caminhão usadas', 'Verde', 'Lonas', 120, 15, 2, 'Bolsa', 15, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188846/NATURE_xotqyt.png', 220),
(7, 'Rio', 'Desenvolvida\r\na partir da utilização de materiais de fontes renováveis, \r\ncomo o cânhamo', 'Verde', 'Canhamo', 140, 10, 2, 'Bolsa', 28, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188904/RIO_n1lxiw.png', 179),
(8, 'Zoo', ' Bolsa bistrô, com restos de couro descartados e lixo\r\nsucateado', 'Bege', 'Couro', 160, 5, 2, 'Bolsa', 26, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188396/ZOO_gyq12j.png', 284),
(9, 'Onlion', 'Uma empresa de reciclagem local \r\ncoletou garrafas PET usadas e transformou-as\r\nem um tecido macio e respirável, que foi utilizado para criar a camisa', 'Bege', 'Garrafa', 55, 20, 2, 'Camisa', 15, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189833/ONLION_y9gvlv.png', 85),
(10, 'Blackmona', 'Camisa ecológica criada\r\na partir da utilização de algodão reciclado', 'Preto', 'Algodao', 60, 25, 2, 'Camisa', 10, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677188966/BLACKMONA_iaodqu.png', 83),
(11, 'Luxury', 'Linho orgânico. O linho é uma fibra natural que requer menos água e pesticidas\r\ndo que outras culturas,tornando-a uma alternativa sustentável aos tecidos convencionais', 'Rose', 'Linho', 40, 20, 2, 'Camisa', 8, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189858/LUXURY_xl4crg.png', 102),
(12, 'Purexy', 'Tecidos feitos a partir de algas marinhas', 'Preto', 'Algas', 90, 15, 2, 'Camisa', 3, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189882/PUREXY_g7wtgp.png', 189),
(13, 'Luckydragon', 'Design em fios de seda reciclados', 'Roxo', 'Seda', 90, 10, 2, 'Camisa', 7, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189901/LUCKYDRAGON_l4mmve.png', 125),
(14, 'Eclypse', 'Garrafas plásticas recicladas com refinamento límbico', 'Fade', 'Plastico', 80, 20, 2, 'Camisa', 9, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189927/ECLYPSE_q6j67h.png', 77),
(15, 'Butterfly', 'Pedaços de madeira natural coletados em florestas sustentáveis', 'Verde', 'Material', 50, 20, 2, 'Oculos', 3, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189963/BUTTERFLY_a6usil.png', 93),
(16, 'Smooking', 'Bambu sustentável tingido em duas lentes iradas', 'Preto', 'Bambu', 45, 15, 2, 'Oculos', 12, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189983/SMOOKING_rqqe6d.png', 90),
(17, 'Psycocircle', 'Uso de produtos químicos na produção? 0!! Full Bambu, chará!', 'Verde', 'Bambu', 70, 10, 2, 'Oculos', 14, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677189999/PSYCOCIRCLE_lajdjv.png', 132),
(18, 'Moth', ' Materiais biodegradáveis, como bioplásticos e biocerâmica', 'Roxo', 'Seda', 90, 10, 2, 'Oculos', 20, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190018/MOTH_baj0vi.png', 99),
(19, 'Viventi', ' A lente é feita de plástico reciclado e a armação é feita de um \r\nmaterial que se decompõe em até 5 anos', 'Laranja', 'Plastico', 90, 5, 2, 'Oculos', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190034/VIVENTI_aab4jz.png', 130),
(20, 'Azueto', 'Cortiça de sobreiro na pura luxúria', 'Azul', 'Cortica', 150, 30, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190057/AZULETO_hfjmfc.png', 349),
(21, 'Cinzeto', 'Cortiça de sobreiro na pura luxúria', 'Cinza', 'Cortica', 150, 25, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190073/CINZETO_bcx61y.png\r\n', 856),
(22, 'Verdeto', 'Algodão orgânico\r\ncultivado sem o uso de pesticidas ou fertilizantes químicos', 'Verde', 'Algodao', 150, 20, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190095/VERDETO_kezvjo.png', 555),
(23, 'Negueto', ' Couro de abacaxi, uma alternativa vegana ao couro animal', 'Preto', 'Abacaxi', 150, 15, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190134/NEGUETO_eppfkb.png', 786),
(24, 'Roseto', '  A sola é feita de borracha reciclada e é resistente e durável.\r\nO tênis ecológico é produzido com couro de peixe, \r\numa alternativa sustentável e vegana ao couro animal', 'Rose', 'Borracha', 150, 10, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190152/ROSSETO_hscd4l.png', 1423),
(25, 'Jasonsharp', 'Couro de pinatex, \r\nque é uma alternativa vegana ao couro animal', 'Verde', 'Pinatex', 300, 5, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190183/JASONSHARP_w9cpxd.png', 654),
(26, 'Smallypink', 'Fibras de bambu orgânico,\r\nque o torna suave', 'Rose', 'Bambu', 400, 5, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190215/SMALLYPINK_mw3swx.png\r\n', 799),
(27, 'Duboa', ' O tênis ecológico é produzido com tecidos de algodão orgânico e couro de coco,\r\nque é uma alternativa vegana ao couro animal', 'Verde', 'Coco', 250, 5, 2, 'Tenis', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190250/DUBOA_cwgxyc.png', 585),
(28, 'Shunin', 'Toalha macia e absorvente, além de ser uma opção sustentável para o meio ambiente.', 'Azul', 'Algodao', 90, 10, 2, 'Toalha', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190276/SHUNIN_grbguw.png', 135),
(29, 'Ronin', 'Toalha é macia e absorvente, além de ser uma opção sustentável para o meio ambiente', 'Marrom', 'Algodao', 90, 10, 2, 'Toalha', 0, 'https://res.cloudinary.com/dmya54lkj/image/upload/v1677190320/RONIN_jhfej8.png', 135);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `email` varchar(40) NOT NULL,
  `telefone` int(18) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `cpf`, `email`, `telefone`, `login`, `senha`) VALUES
(1, 'Gui', '00000', 'guilhermememedon@gmail.com', 0, 'Gmedon', 123);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
