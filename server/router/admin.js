import Router from 'koa-router'
import Blog from './../models/article'

let router = Router()

router.get('/admin', async (ctx) => {
  ctx.body = {'result': 'ok', status: 200}
})

router.post('/blogs', async (ctx) => {
  // console.log(ctx.request.body)
  let body = ctx.request.body
  try {
    let blog = await Blog.create(body)
    ctx.body = blog
  } catch (err) {
    console.log(err.name, err.message, err.number, err.description)
    ctx.body = {'err': err}
  }
})

export default router
