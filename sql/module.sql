CREATE TABLE `tb_module` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `img` varchar(300) NOT NULL DEFAULT '',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `putawayTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上架时间',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `type` int NOT NULL DEFAULT '0' COMMENT '类别 1 关于我们 2 联系我们 3 vip看房',
  `state` int NOT NULL DEFAULT '1' COMMENT ' 0未上架 1已上架  2已下架 3已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;