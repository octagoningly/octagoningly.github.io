'use strict';

/**
 * 空博客兜底生成器
 *
 * 背景：hexo-generator-index 与 hexo-generator-archive 都依赖 hexo-pagination。
 * 当文章数为 0 时，hexo-pagination 算出 total = 0，for 循环一次都不执行，
 * 首页 / 与归档页 /archives/ 直接不生成，站点变成空白；
 * hexo-generator-archive 更是 `if (!allPosts.length) return;` 提前退出。
 *
 * 本脚本在「一篇文章都没有」时补上首页与归档页，保证新建博客
 * 或清空示例文章后站点仍然可以访问。有文章时什么都不做，完全交给官方生成器。
 */
hexo.extend.generator.register('empty-site-fallback', function (locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by || '-date');

  // 有文章时交给官方生成器，避免重复生成
  if (posts.length) return [];

  const data = {
    base: '',
    total: 1,
    current: 1,
    posts: posts,
    prev: 0,
    prev_link: '',
    next: 0,
    next_link: ''
  };

  return [
    {
      // 首页 /
      path: '',
      layout: ['index', 'archive'],
      data: Object.assign({ __index: true, current_url: '' }, data)
    },
    {
      // 归档页 /archives/
      path: 'archives/',
      layout: ['archive', 'index'],
      data: Object.assign({ archive: true, base: 'archives/', current_url: 'archives/' }, data)
    }
  ];
});
