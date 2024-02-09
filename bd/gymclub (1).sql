-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09/02/2024 às 02:38
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gymclub`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `email_admin` varchar(255) NOT NULL,
  `password_admin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `admin`
--

INSERT INTO `admin` (`id_admin`, `email_admin`, `password_admin`) VALUES
(7, 'antonio@gmail.com', '$2y$10$l.ktTpnm9bmpqDw9aFLl0O7YJEqpzhxZq9K1xVF3f6n6oGlBIriMy'),
(12, 'bryan@gmail.com', '$2y$10$nREFo0vJMv3QkRvrEVU3u.CO7Va270ZNt8A/HNvn2u3vdvFeJWR9y'),
(13, 'aaa@gmail.com', '$2y$10$1jDOhjR.H0UY4/YUU.mh4.BX/F/9iPceYFpdZKlHTCVvsX1.FuCFm');

-- --------------------------------------------------------

--
-- Estrutura para tabela `coments`
--

CREATE TABLE `coments` (
  `id_coment` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `coment` varchar(355) NOT NULL,
  `grade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `coments`
--

INSERT INTO `coments` (`id_coment`, `users_id`, `coment`, `grade`) VALUES
(22, 1, 'GymClub é o seu portal para uma jornada fitness excepcional! Com uma interface intuitiva, conteúdo inspirador e programas personalizados, este site é o parceiro ideal na busca por uma vida saudável. Desperte seu potencial com o GymClub e transforme cada treino em uma conquista!', 10),
(23, 9, 'Site bem feito e desenvolvido com as melhores tecnologias do mercado!!', 9);

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(255) NOT NULL,
  `price_product` float NOT NULL,
  `url_product` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id_product`, `name_product`, `price_product`, `url_product`) VALUES
(7, 'Whey Protein', 150, 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157626-800-800?v=638351464193770000&width=800&height=800&aspect=true'),
(8, 'Creatina', 90, 'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/6a503649-cd9f-40e4-b26e-f37071665e67___e7546e8ec27e96e1b68dfbf5017dd0b5.png'),
(9, 'Tech T-Shirt Insider', 159, 'https://www.insiderstore.com.br/cdn/shop/files/C6-TechT-ShirtGolaUPreto6.jpg?v=1700691687&width=1206'),
(12, '100% Whey Dr. Peanut 900g - Max Titanium Avelã', 189, 'https://images.tcdn.com.br/img/img_prod/1087751/100_whey_dr_peanut_900g_max_titanium_avela_362_1_fe3bf200d64390b5064eec67be19f370.jpg'),
(13, 'Horus 150g - Amora', 86, 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157430-800-800?v=638344614816970000&width=800&height=800&aspect=true'),
(14, 'Power Protein Bar 90G -Dark chocolate truffle', 125, 'https://static.netshoes.com.br/produtos/power-protein-bar-8-unidades-max-titanium-(dark-chocolate-truffle)/48/A05-1259-448/A05-1259-448_zoom1.jpg?ts=1685461135&');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `planId` float NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `planId`, `image`) VALUES
(1, 'antonio', 'antonio@gmail.com', '$2y$10$vEpeu9F7Ik8JZU187jinMOGpEhe8OSysVr3SCP42a6FP1UvLa8jTa', 80, 'ad65c436c65c76113765a08a8dbde73b.jpg'),
(2, 'elias', 'elias@gmail.com', '$2y$10$3/l/tYRDOqIHtFLsaHgL2OuOrBfKb.jphaJJAhcWOHnG/p485gHC.', 80, 'fd938b53d8a9a43c10f35cb4e0f8cf57.jpg'),
(3, 'juan', 'juan@gmail.com', '$2y$10$BxhaUhz3bJyrIrlXR6OeQui35DDzU2u3MAkqY2iC0FnTw2u99IF/2', 80, 'cf882d16527f2481595be3bef885fdf1.png'),
(4, 'vitor', 'vitor@gmail.com', '$2y$10$9UCJ4JPWJMwosiy48goC7eWVPKIeXnAXg264rUqZd.OXvNRNFv4Hq', 900, NULL),
(5, 'Bryan', 'bryan@gmail.com', '$2y$10$G/RxG1pF0clyD//spehNEOX5HfC5X2p225c2zcdW3ywIkMpbUDQ2e', 900, '3bce409a400d27add9f17b2ea46b7716.jpg'),
(7, 'jhon', 'jhon@gmail.com', '$2y$10$/0zZZV.9ymYdzwkDCwyekuRHqebNUBe.U0/Me5mJFmvNQLJC.FFkS', 900, NULL),
(8, 'pedro', 'pedro@gmail.com', '$2y$10$GdsRxahDkbG6M8XYI7EmweSdH38NP4HgmrtGye4Wp15pJDodgRj3W', 900, NULL),
(9, 'luiz', 'luiz@gmail.com', '$2y$10$rExlKplI/PMos8VfP.0Xb.FE2Gb7QLcsBVUSkXgvDx5.vKPGMGx72', 80, NULL),
(10, 'Teste', 'teste@gmail.com', '$2y$10$7W4PAaVYMzwS4LbaYm/y7ehJbsfmPOQPEI.wWvxqt9OA/IcHi7x8S', 20, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Índices de tabela `coments`
--
ALTER TABLE `coments`
  ADD PRIMARY KEY (`id_coment`),
  ADD KEY `users_id` (`users_id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `coments`
--
ALTER TABLE `coments`
  MODIFY `id_coment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `coments`
--
ALTER TABLE `coments`
  ADD CONSTRAINT `coments_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
