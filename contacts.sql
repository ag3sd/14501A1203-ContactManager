-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2018 at 07:38 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contacts`
--

-- --------------------------------------------------------

--
-- Table structure for table `cinf`
--

CREATE TABLE `cinf` (
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gid` int(255) NOT NULL,
  `owner` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cinf`
--

INSERT INTO `cinf` (`name`, `phone`, `email`, `gid`, `owner`) VALUES
('pavan', '4567890', 'pavan@mail.com', 2, 'sai@inmar.com'),
('asncksnl', '67890', 'hjnk m.', 3, 'sai@inmar.com'),
('ahmed', '2345678', 'sbdciasiksnc', 0, 'sai@inmar.com');

-- --------------------------------------------------------

--
-- Table structure for table `ginf`
--

CREATE TABLE `ginf` (
  `owner` varchar(255) NOT NULL,
  `gid` int(255) NOT NULL,
  `gname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ginf`
--

INSERT INTO `ginf` (`owner`, `gid`, `gname`) VALUES
('sai@inmar.com', 2, 'pvpsit2'),
('sai@inmar.com', 3, 'notnew'),
('sai@inmar.com', 4, 'test');

-- --------------------------------------------------------

--
-- Table structure for table `inmareg`
--

CREATE TABLE `inmareg` (
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `aadhar` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `gid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inmareg`
--

INSERT INTO `inmareg` (`email`, `fname`, `lname`, `psw`, `aadhar`, `phone`, `gender`, `gid`) VALUES
('sai@inmar.com', 'srinivas', 'deekshith', 'satyakrishna.A1', '123456785666', '1122234445', 'Male', 3),
('sandy@inmar.com', 'sandeep', 'dunnala', 'sandy.A1', '23456781234567', '23456789078', 'Male', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inmareg`
--
ALTER TABLE `inmareg`
  ADD PRIMARY KEY (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
