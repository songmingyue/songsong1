
/**
 * 修改博客
 * @export
 * @param {any} {sql, clientRedis}
 * @param {any} newsInfo 新闻信息
 * @returns 返回修改成功或失败
 */
export async function login ({sql, clientRedis}, userInfo) {
  console.log('3333', userInfo.username)
  let data = await sql.getSqlData({
    sqlQuery: 'select * from t_user where username = ? and password = ?',
    arg: [userInfo.username, userInfo.password]
  })

  return data
}
