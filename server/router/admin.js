import Router from 'koa-router'

let router = Router()

router.get('/admin', async (ctx) => {
  ctx.body = {'result': 'ok', status: 200}
})

export default router
