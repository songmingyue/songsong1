
export async function getUserBlogNews (ctx, next) {
  let {news} = ctx.models
  let data = await news.getUserBlogNews(ctx.tools)

  ctx.state = {
    title: 'leo的博客',
    body: data
  }
  await ctx.render('userblog', {
  })
}

/**
 * 登录验证
 * @export
 * @param {any} ctx 上下文
 * @param {any} next 传递上下文
 */
export async function login (ctx, next) {
  let {user} = ctx.models
  console.log('body:', ctx.request.body)
  let data = await user.login(ctx.tools, ctx.request.body)
  ctx.body = data
}
