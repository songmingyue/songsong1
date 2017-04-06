import Router from 'koa-router'
import {user, news} from '../controllers/index.js'
const router = new Router()

router.get('/news/:id', news.show)

router.post('/user', user.login)

export default router
