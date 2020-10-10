import mongoose, { Schema } from 'mongoose'
import { nanoid } from 'nanoid'
import slugify from 'slugify'

const articleSchema = new Schema(
  {
    slug: { type: String, unique: true, trim: true },
    title: { type: String, required: [true, 'Title is required'], trim: true },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
    },
    upvotes: { type: Number, default: 0 },
    comments: { type: [commentSchema] },
  },
  { timestamps: true },
)

const commentSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
  },
  text: { type: String, required: [true, 'Text is required'], trim: true },
})

articleSchema.pre('save', function (next) {
  this.slug = slugify(this.title + '-' + nanoid(5), { lower: true })
  next()
})

const Article = mongoose.model('Article', articleSchema)
export default Article
