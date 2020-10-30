CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '资讯标题',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `putawayTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上架时间',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `operateId` int(10) unsigned zerofill NOT NULL COMMENT '操作人用户id',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '类别 1资讯 2政策 3动态',
  `state` int(11) NOT NULL DEFAULT '1' COMMENT ' 0未上架 1已上架  2已下架 3已删除',
  `stick` int(11) NOT NULL DEFAULT '0' COMMENT '0 不置顶  1置顶',
  `countryId` int(11) NOT NULL COMMENT '国家id',
  `countryStr` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '国家字符串',
  `img` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '封面图',
  `subtitle` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '副标题',
  PRIMARY KEY (`id`),
  KEY `operateId` (`operateId`)
) ENGINE=InnoDB AUTO_INCREMENT=4247 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;