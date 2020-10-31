CREATE TABLE `house_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '项目名称',
  `handingTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '交房时间',
  `minPrice` int(11) NOT NULL COMMENT '项目价格范围左边界',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `putawayTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上架时间',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `operateId` int(11) unsigned zerofill NOT NULL COMMENT '操作人用户id',
  `countryId` int(11) NOT NULL COMMENT '国家id',
  `countryStr` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provinceId` int(11) NOT NULL COMMENT '省id 国外对应州id',
  `provinceStr` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `houseType` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` int(11) NOT NULL DEFAULT '1' COMMENT '状态 0未上架 1已上架  2已下架 3已删除',
  PRIMARY KEY (`id`),
  KEY `operateId` (`operateId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;