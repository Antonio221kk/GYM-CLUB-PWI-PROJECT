-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 02:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gymclub`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `email_admin` varchar(255) NOT NULL,
  `password_admin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `email_admin`, `password_admin`) VALUES
(2, 'antonioadm@gmail.com', 'adm'),
(5, 'adm@adm.com', '$2y$10$JtnjInaUyOcJog2GMZd1C.WN.FigupKx4.BVf9YORzotIcw3ECJRq'),
(6, 'jhonatan@gmail.com', '$2y$10$kWIMKzaJ02s0Len5at3cZ.vDg1RhAFjgJo0z9s/i1vCnjF3b.WH3u');

-- --------------------------------------------------------

--
-- Table structure for table `coments`
--

CREATE TABLE `coments` (
  `id_coment` int(11) NOT NULL,
  `coment` varchar(350) NOT NULL,
  `grade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(255) NOT NULL,
  `price_product` float NOT NULL,
  `url_product` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `name_product`, `price_product`, `url_product`) VALUES
(7, 'Whey Protein', 150, 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157626-800-800?v=638351464193770000&width=800&height=800&aspect=true'),
(8, 'Creatina', 90, 'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/6a503649-cd9f-40e4-b26e-f37071665e67___e7546e8ec27e96e1b68dfbf5017dd0b5.png'),
(9, 'Tech T-Shirt Insider', 159, 'https://www.insiderstore.com.br/cdn/shop/files/C6-TechT-ShirtGolaUPreto6.jpg?v=1700691687&width=1206'),
(10, 'Pasta Bueníssimo ', 64, 'https://images.tcdn.com.br/img/img_prod/1087751/pasta_de_amendoim_sabor_buenissimo_com_whey_protein_600g_117_1_a7a671e2ea505bc2ebbb4d619630e8bd.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `planId` float NOT NULL,
  `fk_coments` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `planId`, `fk_coments`) VALUES
(13, 'Antônio', 'canalantoniomartins@gmail.com', '$2y$10$L9QWKx6NoeuAFQ7QUwAOpORwFNIBupvFqhJ1T8zQTI6koNzUSyVVS', 20, NULL),
(14, 'antonio', 'elias@gmail.com', '$2y$10$UweLwknr8hIexAgxyY7v2uYGFuxU0QKvnnR1T66qOCjlPIpzk1bP2', 20, NULL),
(15, 'antonio', 'antonio@gmail.com', '$2y$10$haqZfz5l2c3Y8JnhJkOC9.0rrV1pwzrZkt/ngW9uu7v3m8kE.acMG', 20, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `coments`
--
ALTER TABLE `coments`
  ADD PRIMARY KEY (`id_coment`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_coments` (`fk_coments`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `coments`
--
ALTER TABLE `coments`
  MODIFY `id_coment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`fk_coments`) REFERENCES `coments` (`id_coment`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
