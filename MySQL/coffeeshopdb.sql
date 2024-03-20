-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2024 at 02:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffeeshopdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `icemenu`
--

CREATE TABLE `icemenu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `icemenu`
--

INSERT INTO `icemenu` (`id`, `name`, `price`, `image_url`) VALUES
(1, 'ลาเต้เย็น', '79', 'https://d1mf4ril8efyfr.cloudfront.net/media/store_427/products/a3fd3170-d6f6-46c4-a53a-aac01d90331e.jpg'),
(2, 'อเมริกาโน่เย็น', '59', 'https://yalamarketplace.com/upload/1615693076355.jpg'),
(3, 'มอคค่าเย็น', '79', 'https://www.aromathailand.com/wp-content/uploads/2023/04/Cover-Mocha-1080x675.jpg'),
(4, 'คาปูชิโน่เย็น', '79', 'https://s359.kapook.com/pagebuilder/d5725442-1458-4a0e-83b2-2ec0e6908d3d.jpg'),
(5, 'มัคคิอาโต้เย็น', '89', 'https://img.wongnai.com/p/1920x0/2019/06/01/b88948c89c8a43549ae2b4100d7b8337.jpg'),
(6, 'เอสเพรสโซ่เย็น', '69', 'https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nescafe-iced-espresso-540x400.jpg?itok=cGl4pcYu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `icemenu`
--
ALTER TABLE `icemenu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `icemenu`
--
ALTER TABLE `icemenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
