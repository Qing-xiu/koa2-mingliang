CREATE TABLE `area` (
  `id` int(10) unsigned NOT NULL COMMENT '国家id',
  `name` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parentId` int(10) unsigned zerofill NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `orderNumber` int(11) NOT NULL DEFAULT '0' COMMENT '排序 越大越靠前',
  `state` int(11) NOT NULL DEFAULT '1' COMMENT '状态 0未上架 1已上架  2已下架 3已删除',
  `pinyin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;