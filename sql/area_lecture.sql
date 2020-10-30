CREATE TABLE `area_lecture` (
  `id` int(10) unsigned NOT NULL COMMENT '国家id',
  `name` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parentId` int(10) unsigned zerofill NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pinyin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;