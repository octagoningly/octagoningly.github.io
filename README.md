# octagon

基于 [Hexo](https://hexo.io/) + [Fluid 主题](https://github.com/fluid-dev/hexo-theme-fluid) 的个人博客。
脚手架取自开源模板 [zuige66/hexo](https://github.com/zuige66/hexo) 的 `template` 分支，已清空示例数据并换成本站信息。

## 已启用的功能

| 功能 | 说明 |
|---|---|
| 云海 Banner | 首页 WebGL 实时渲染的云海列车，设备不支持 WebGL2 / 开启「减弱动效」时自动回退静态图 |
| 动态（Moments） | 短句随手记，与文章共用归档页 `/archives/`，顶部按钮切换 |
| 留言板 | 独立页面 `/guestbook/`，基于 giscus（参数未填时评论框不渲染） |
| 友链 | `/links/`，当前为空列表，加人只需改 `_config.fluid.yml` |
| 软导航 | 站内切换不整页重载，Banner 动画跨页续接 |
| 站内搜索 | 基于 `local-search.xml`，导航栏放大镜 |
| 明暗双模式 | Fluid 自带 |

## 目录结构

```
├── _config.yml            # Hexo 主配置（站点名/作者/网址/部署）
├── _config.fluid.yml      # Fluid 主题配置（导航栏/首页/关于/友链/评论）
├── scaffolds/             # 新建文章的模板
├── source/
│   ├── _posts/            # 文章，一篇一个 .md
│   ├── _data/moments.yml  # 动态数据
│   ├── _data/languages/   # 自定义文案
│   ├── about/             # 关于页
│   ├── guestbook/         # 留言板页
│   ├── links/             # 友链页
│   ├── js/ css/           # 本站定制脚本与样式
│   └── img/               # 图片资源
└── themes/fluid/          # Fluid 主题（含本站定制，直接改，不是 submodule）
```

## 常用命令

```bash
npm install          # 首次安装依赖
npx hexo server      # 本地预览 http://localhost:4000
npx hexo new "标题"  # 新建文章
npx hexo clean       # 清缓存（改过主题配置后必须先执行，见下方「坑」）
npx hexo generate    # 生成静态文件到 public/
npx hexo deploy      # 部署（需先配好 _config.yml 的 deploy.repo）
```

> 安装依赖若因系统权限报 `EPERM`，改用 `npm install --ignore-scripts` 即可（本项目的依赖都不需要在安装时编译）。

## 怎么改内容

| 想改什么 | 改哪里 |
|---|---|
| 站点名 / 作者 / 副标题 | `_config.yml` 的 `title` / `author` / `subtitle` |
| 导航栏标题 | `_config.fluid.yml` → `navbar.blog_title` |
| 首页打字机文案 | `_config.fluid.yml` → `index.slogan.text` |
| 关于页头像、昵称、社交图标 | `_config.fluid.yml` → `about.*`（头像放 `source/img/avatar.png`） |
| 关于页正文 | `source/about/index.md` |
| 友链 | `_config.fluid.yml` → `links.items`，格式：`{ title, intro, link, avatar }` |
| 动态 | `source/_data/moments.yml`，新的往列表最前面加 |
| 文章 | `source/_posts/*.md` |
| 页脚备案号 | `_config.fluid.yml` → `footer.beian`（默认关闭） |

## 两个坑

1. **改配置不生效**：Hexo 只跟踪源文件变化，不跟踪 `_config.fluid.yml`。改完执行 `npx hexo clean && npx hexo generate`。
2. **改了 `source/js` / `source/css` 没变化**：浏览器缓存，把 `_config.fluid.yml` 里 `custom_js` / `custom_css` 的 `?v=N` 递增一位。

## 部署到 GitHub Pages

推荐用用户主页仓库：仓库名必须是 `octagoningly.github.io`，访问地址直接是 `https://octagoningly.github.io`，没有子路径问题。

1. 在 GitHub 新建仓库 `octagoningly.github.io`；
2. 确认 `_config.yml`：

   ```yaml
   url: https://octagoningly.github.io
   deploy:
     type: git
     repo: git@github.com:octagoningly/octagoningly.github.io.git
     branch: gh-pages
   ```

3. `npx hexo clean && npx hexo generate && npx hexo deploy`
4. 仓库 Settings → Pages → Source 选 `gh-pages` 分支。

要绑定独立域名，再准备 `source/CNAME`（内容为你的域名）并配置 DNS。

## 评论（giscus）暂未启用

`_config.fluid.yml` 里 `giscus` 四个参数为空时，评论框不显示、也不报错。启用步骤：

1. 仓库设为公开、开启 Discussions、安装 [giscus App](https://github.com/apps/giscus)；
2. 在 [giscus.app](https://giscus.app/) 生成 `repo` / `repo-id` / `category` / `category-id`；
3. 填进 `_config.fluid.yml` 的 `giscus` 段，留言板页与友链页自动生效。

## 朋友圈 RSS 聚合

`.github/workflows/circle.yml` 已重命名为 `circle.yml.disabled`：它需要自行配置 `DEPLOY_KEY` 等 Secrets，且 `circle-feeds.json` 目前是空数组 `[]`。等有了带 RSS 的友链再改回来。

## 署名与许可

- **Fluid 主题**：[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/main/LICENSE)，© Fluid-dev；
- **云间列车 Banner**：改编自 Shadertoy 作品 [Up in the Cloud Sea](https://www.shadertoy.com/view/Ndc3zl)（原作 mdb，单 Pass 移植 Tyson Zhou，**CC BY-NC-SA 3.0**）。使用时必须保留页脚署名（`_config.fluid.yml` 的 `footer.content`），不得商用，衍生作品需以相同协议共享。
