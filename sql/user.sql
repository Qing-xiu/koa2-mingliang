CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '姓名',
  `mobile` varchar(18) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '电话',
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `token` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户token',
  `tokenOverTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户token创建时间',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '1' COMMENT '0 未启用 1已启用 2已删除',
  `roleId` int(11) NOT NULL COMMENT '角色id',
  `department` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT ' 部门',
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '邮箱',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `operateId` int(10) unsigned zerofill NOT NULL COMMENT '操作人用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;