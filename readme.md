# hexo-simple-template

## [Live](https://cwxyz007.github.io)

## 如何测试

1. 搭建 Hexo 环境
2. 在 Hexo 根目录下运行命令 `git clone https://github.com/cwxyz007/hexo-simple-template.git themes/simple`
3. 修改 Hexo 的 `_config.yml` 文件，把 `theme: landscape` 改成 `theme: simple`
4. 安装 `hexo-render-pug` 和 `hexo-renderer-scss` 插件
5. 运行 `hexo s`

```bash
hexo init
git clone https://github.com/cwxyz007/hexo-simple-template.git themes/simple
yarn add hexo-render-pug hexo-renderer-sass
hexo s
```

## 文字阅读体验

- 使用渐变，使上下文字渐变消失

## 相关资料

- [Hexo 变量](https://hexo.io/zh-cn/docs/variables.html)
- [Hexo database api](https://hexo.io/warehouse/)
- [SCSS 语法](http://sass.bootcss.com/docs/sass-reference/)
- [Pug 模板语法](https://pugjs.org/zh-cn/language/attributes.html)
- [写一个自己的 Hexo 主题](https://segmentfault.com/a/1190000006057336)

## 设计原则

- 专注于阅读
- 简洁
