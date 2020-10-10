import Article from '../models/Article'

export const index = async function (req, res, next) {
  try {
    const articles = await Article.find({})
    res.json({ totalCount: articles.length, articles })
  } catch (error) {
    next(error)
  }
}
export const get = async function (req, res, next) {
  try {
    const article = await Article.findOne({ slug: req.params.slug })
    if (!article) {
      const error = new Error('Article not found')
      error.status = 404
      throw error
    }
    res.json(article)
  } catch (error) {
    next(error)
  }
}
export const create = async function (req, res, next) {
  try {
    const article = await Article.create({
      title: req.body.title,
      content: req.body.content,
    })
    res.status(201).json(article)
  } catch (error) {
    next(error)
  }
}
export const upvote = async function (req, res, next) {
  try {
    const article = await Article.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { upvotes: 1 } },
      { new: true },
    )
    if (!article) {
      const error = new Error('Article not found')
      error.status = 404
      throw error
    }
    res.json(article)
  } catch (error) {
    next(error)
  }
}
export const destroy = async function (req, res, next) {
  try {
    await Article.findOneAndDelete({ slug: req.params.slug })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
export const comment = async function (req, res, next) {
  try {
    const article = await Article.findOne({ slug: req.params.slug })
    if (!article) {
      const error = new Error('Article not found')
      error.status = 404
      throw error
    }
    const comment = await article.update({
      $push: { comments: { username: req.body.username, text: req.body.text } },
    })
    res.status(201).json(comment)
  } catch (error) {
    next(error)
  }
}
