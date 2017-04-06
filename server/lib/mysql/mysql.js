import mysql from 'promise-mysql'

let pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'blog',
  port: 35627,
  connectionLimit: 10
})

export async function getSqlData ({sqlQuery, arg}) {
  let data
  try {
    let conn = await pool.getConnection()
    data = await conn.query(sqlQuery, arg)
    await pool.releaseConnection(conn)
  } catch (err) {
    console.log('err:', err)
  }
  return data
}




