import app from './middleware'
import routerList from './routes/index'

import models from './models/index.js'

// 配置数据库和redis，模块
app.use(async (ctx, next) => {
  await next()
})

// 遍历所有的路由
routerList.map((routerValue) => {
  app.use(routerValue.routes(), routerValue.allowedMethods())
})

export default app
