import Router from 'koa-router'
import {user} from '../controllers/index.js'
const router = new Router()

router.get('/user', user.getUserBlogNews)

// router.post('/user/login', async (ctx, next) => {
//   ctx.body = 233222
// })
router.post('/user/login', user.login)

export default router
