-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2023 at 02:28 AM
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
(7, 'antonio@gmail.com', '$2y$10$l.ktTpnm9bmpqDw9aFLl0O7YJEqpzhxZq9K1xVF3f6n6oGlBIriMy');

-- --------------------------------------------------------

--
-- Table structure for table `coments`
--

CREATE TABLE `coments` (
  `id_coment` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `coment` varchar(355) NOT NULL,
  `grade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coments`
--

INSERT INTO `coments` (`id_coment`, `users_id`, `coment`, `grade`) VALUES
(18, 1, ' Gym Club é um site excepcional que oferece uma experiência fitness completa. Sua interface intuitiva e design moderno facilitam a navegação. A variedade de programas de treino e recursos educacionais é impressionante, proporcionando aos usuários um caminho claro para atingir seus objetivos de condicionamento físico. Com informações atualizadas e s', 10);

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
(12, '100% Whey Dr. Peanut 900g - Max Titanium Avelã', 189, 'https://images.tcdn.com.br/img/img_prod/1087751/100_whey_dr_peanut_900g_max_titanium_avela_362_1_fe3bf200d64390b5064eec67be19f370.jpg'),
(13, 'Horus 150g - Amora', 86, 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157430-800-800?v=638344614816970000&width=800&height=800&aspect=true'),
(14, 'Power Protein Bar 90G -Dark chocolate truffle', 125, 'https://static.netshoes.com.br/produtos/power-protein-bar-8-unidades-max-titanium-(dark-chocolate-truffle)/48/A05-1259-448/A05-1259-448_zoom1.jpg?ts=1685461135&'),
(16, 'Wingsuit - Insider', 300, 'https://www.insiderstore.com.br/cdn/shop/files/OFF-WHITE-01_3c1c448d-4df1-4749-ba9d-bd7c3276fb98.jpg?v=1699739406&width=1206');

-- --------------------------------------------------------

--
-- Table structure for table `users`
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
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `planId`, `image`) VALUES
(1, 'antonio', 'antonio@gmail.com', '$2y$10$vEpeu9F7Ik8JZU187jinMOGpEhe8OSysVr3SCP42a6FP1UvLa8jTa', 80, '302e57804b35dadb4f16efe7ac71cc5e.png'),
(2, 'elias', 'elias@gmail.com', '$2y$10$3/l/tYRDOqIHtFLsaHgL2OuOrBfKb.jphaJJAhcWOHnG/p485gHC.', 80, 'fd938b53d8a9a43c10f35cb4e0f8cf57.jpg');

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
  ADD PRIMARY KEY (`id_coment`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `coments`
--
ALTER TABLE `coments`
  MODIFY `id_coment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `coments`
--
ALTER TABLE `coments`
  ADD CONSTRAINT `coments_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
