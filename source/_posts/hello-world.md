---
title: 你好，世界
date: 2026-10-20 12:00:00
tags:
  - 博客
  - 开站
categories:
  - 随笔
---

这里是「octagon」的第一篇文章。

这个博客用 [Hexo](https://hexo.io/) 搭建，主题是 [Fluid](https://github.com/fluid-dev/hexo-theme-fluid)，参考了一个开源模板并做了精简：保留了云海 Banner、动态、留言板、友链与站内软导航，清掉了模板自带的示例数据。

## 写一篇新文章

在 `source/_posts/` 下新建 `.md` 文件，或者在项目根目录执行：

```bash
npx hexo new "文章标题"
```

文章开头的 front-matter 决定标题、时间、分类与标签：

```markdown
---
title: 文章标题
date: 2026-10-20 12:00:00
tags:
  - 标签一
categories:
  - 分类一
---

正文……
```

## 常用命令

```bash
npx hexo clean       # 清理缓存（改过主题配置后必须执行）
npx hexo generate    # 生成静态文件到 public/
npx hexo server      # 本地预览 http://localhost:4000
npx hexo deploy      # 部署（需先配置 _config.yml 的 deploy.repo）
```

## 一点说明

首页头图是 WebGL 实时渲染的云海列车，设备不支持 WebGL2 或开启了「减弱动效」时会自动回退成静态图，属正常现象。

接下来打算写的东西：技术笔记、折腾记录，以及一些没头没尾的随想。
