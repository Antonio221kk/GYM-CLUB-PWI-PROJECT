-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 24-Nov-2023 às 11:08
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.3.21

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
-- Estrutura da tabela `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `email_admin` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password_admin` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`id_admin`, `email_admin`, `password_admin`) VALUES
(6, 'jhonatan@gmail.com', '$2y$10$kWIMKzaJ02s0Len5at3cZ.vDg1RhAFjgJo0z9s/i1vCnjF3b.WH3u'),
(7, 'antonio@gmail.com', '$2y$10$l.ktTpnm9bmpqDw9aFLl0O7YJEqpzhxZq9K1xVF3f6n6oGlBIriMy');

-- --------------------------------------------------------

--
-- Estrutura da tabela `coments`
--

DROP TABLE IF EXISTS `coments`;
CREATE TABLE IF NOT EXISTS `coments` (
  `id_coment` int NOT NULL AUTO_INCREMENT,
  `coment` varchar(350) COLLATE utf8mb4_general_ci NOT NULL,
  `grade` int NOT NULL,
  PRIMARY KEY (`id_coment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price_product` float NOT NULL,
  `url_product` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id_product`, `name_product`, `price_product`, `url_product`) VALUES
(7, 'Whey Protein', 150, 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157626-800-800?v=638351464193770000&width=800&height=800&aspect=true'),
(8, 'Creatina', 90, 'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/6a503649-cd9f-40e4-b26e-f37071665e67___e7546e8ec27e96e1b68dfbf5017dd0b5.png'),
(9, 'Tech T-Shirt Insider', 159, 'https://www.insiderstore.com.br/cdn/shop/files/C6-TechT-ShirtGolaUPreto6.jpg?v=1700691687&width=1206'),
(10, 'Pasta Bueníssimo ', 64, 'https://images.tcdn.com.br/img/img_prod/1087751/pasta_de_amendoim_sabor_buenissimo_com_whey_protein_600g_117_1_a7a671e2ea505bc2ebbb4d619630e8bd.png'),
(12, '100% Whey Dr. Peanut 900g - Max Titanium Avelã', 189, 'https://images.tcdn.com.br/img/img_prod/1087751/100_whey_dr_peanut_900g_max_titanium_avela_362_1_fe3bf200d64390b5064eec67be19f370.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `planId` float NOT NULL,
  `fk_coments` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_coments` (`fk_coments`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `planId`, `fk_coments`) VALUES
(13, 'Antônio', 'canalantoniomartins@gmail.com', '$2y$10$L9QWKx6NoeuAFQ7QUwAOpORwFNIBupvFqhJ1T8zQTI6koNzUSyVVS', 20, NULL),
(14, 'antonio', 'elias@gmail.com', '$2y$10$UweLwknr8hIexAgxyY7v2uYGFuxU0QKvnnR1T66qOCjlPIpzk1bP2', 20, NULL),
(15, 'antonio', 'antonio@gmail.com', '$2y$10$haqZfz5l2c3Y8JnhJkOC9.0rrV1pwzrZkt/ngW9uu7v3m8kE.acMG', 20, NULL);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`fk_coments`) REFERENCES `coments` (`id_coment`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
