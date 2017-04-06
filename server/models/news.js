
export async function getUserBlogNews ({sql, clientRedis}) {
  // 优先在redis如果没有数据库里拿
  // await clientRedis.del('newslist')
  let data = await clientRedis.lrange('newslist', 0, -1)
  if (data.length === 0 || data === null) {
    data = await sql.getSqlData({
      sqlQuery: 'select name from t_user'
    })
    await clientRedis.del('newslist')
    data.map(async (value) => {
      await clientRedis.lpush('newslist', JSON.stringify(value))
    })
  } else {
    let val = 0
    data.map((value) => {
      data[val] = JSON.parse(value)
      val++
    })
    console.log('redis')
  }
  return data
}

/**
 * 添加文章  草稿  和  发布
 * @export
 * @param {any} {sql, clientRedis}
 * @param {any} newsInfo（文章信息）
 * @returns 犯规操作失败或成功
 */
export async function addNewsData ({sql, clientRedis}, newsInfo) {
  // 优先在redis如果没有数据库里拿
  // await clientRedis.del('newslist')
  let data = await sql.getSqlData({
    sqlQuery: 'select name from t_user'
  })
  await clientRedis.lpush('newslist', JSON.stringify(newsInfo))

  return data
}

/**
 * 删除文章
 * @export
 * @param {any} {sql, clientRedis}
 * @param {any} newsId（文章标题） 非屋里删除
 * @returns 返回成功或失败
 */
export async function delNewsData ({sql, clientRedis}, newsId) {
  // 优先在redis如果没有数据库里拿
  // await clientRedis.del('newslist')
  let data = await sql.getSqlData({
    sqlQuery: 'select name from t_user'
  })

  // 缓存删除一条 {遍历删除}
  // await clientRedis.lpush('newslist', JSON.stringify(newsInfo))

  return data
}

/**
 * 修改博客
 * @export
 * @param {any} {sql, clientRedis}
 * @param {any} newsInfo 新闻信息
 * @returns 返回修改成功或失败
 */
export async function modifyNewsData ({sql, clientRedis}, newsInfo) {
  // 优先在redis如果没有数据库里拿
  // await clientRedis.del('newslist')
  let data = await sql.getSqlData({
    sqlQuery: 'select name from t_user'
  })
  // 更新redis
  // await clientRedis.lpush('newslist', JSON.stringify(newsInfo))

  return data
}
