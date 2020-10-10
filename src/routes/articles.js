import { Router } from 'express'
import * as controller from '../controllers/articles'

const articlesRouter = Router()

articlesRouter.route('/').get(controller.index).post(controller.create)
articlesRouter.route('/:slug').get(controller.get).delete(controller.destroy)
articlesRouter.route('/:slug/upvote').patch(controller.upvote)
articlesRouter.route('/:slug/comment').post(controller.comment)

export default articlesRouter
