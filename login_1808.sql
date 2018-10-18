/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : login_1808

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-10-18 20:43:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login_user
-- ----------------------------
DROP TABLE IF EXISTS `login_user`;
CREATE TABLE `login_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_user
-- ----------------------------
INSERT INTO `login_user` VALUES ('1', '123', '123456', '1');
INSERT INTO `login_user` VALUES ('4', '111', '123456', '1');
INSERT INTO `login_user` VALUES ('5', 'qwe', 'qweqwe', '2');
INSERT INTO `login_user` VALUES ('6', 'qazwsx', '123456', '2');
INSERT INTO `login_user` VALUES ('7', 'sdawsx', 'vgfdfdsf', '1');
INSERT INTO `login_user` VALUES ('8', 'sdawwqdwqsx', 'asdsa', '1');
INSERT INTO `login_user` VALUES ('9', 'dgfgfddsf', 'adsad', '2');
INSERT INTO `login_user` VALUES ('10', '111111', '123456', null);
INSERT INTO `login_user` VALUES ('11', 'qaz', '111111', null);
INSERT INTO `login_user` VALUES ('13', '123123', '123123', null);
INSERT INTO `login_user` VALUES ('14', '1231234', '1231234', null);
INSERT INTO `login_user` VALUES ('15', '12312345', '1231234', null);
INSERT INTO `login_user` VALUES ('16', '185', '123321', null);
INSERT INTO `login_user` VALUES ('17', '111231', '12332few', null);
INSERT INTO `login_user` VALUES ('18', '1233', '', null);
