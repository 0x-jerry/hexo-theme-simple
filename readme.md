# Hexo Theme Simple

## [Live Demo](https://cwxyz007.github.io)

## 安装 | Install

1. 在 Hexo 根目录下运行命令 `git clone https://github.com/cwxyz007/hexo-theme-simple.git themes/simple`
2. 修改 Hexo 的 `_config.yml` 文件，把 `theme: landscape` 改成 `theme: simple`
3. 安装 `pug` 和 `sass` 辅助库
4. 运行 `hexo s`

```bash
hexo init # create a hexo project
git clone https://github.com/cwxyz007/hexo-theme-single.git themes/simple # download hexo-theme
yarn add pug sass -D # install dependencies
hexo s # run hexo server
```

## 特点 | Feature

- 支持 Google Analytics | Support Google Analytics
- 支持添加[知识共享协议] | Support [Creative Commons license]

## 配置 (Config)

```yaml
# Google analytics
ga:
  active: true
  id: "UA-101492756-1"

# Creative commons license
# license 配置可以在每篇文章里面设置
# License config can set by each article
# ---
# title: {{ title }}
# date: {{ date }}
# license: CC BY-NC
# ---
#
cclicense:
  # @license will replace with page.license
  text: 版权声明：本文使用 @license
  # Lower case
  cc by-nc: https://creativecommons.org/licenses/by-nc/2.0/deed.zh

# Service Worker
sw: true
```

## Bug Report

[Bug report](https://github.com/cwxyz007/hexo-theme-simple/issues)

[知识共享协议]: https://www.wikiwand.com/zh-hans/%E5%89%B5%E4%BD%9C%E5%85%B1%E7%94%A8%E6%8E%88%E6%AC%8A%E6%A2%9D%E6%AC%BE
[creative commons license]: https://www.wikiwand.com/en/Creative_Commons_license
