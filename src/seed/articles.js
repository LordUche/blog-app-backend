import 'dotenv/config'
import mongoose from 'mongoose'
import Article from '../models/Article'

const articles = [
  {
    slug: 'learn-react',
    title: 'The Fastest Way To Learn React',
    content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
    ],
  },
  {
    slug: 'master-cooking',
    title: 'Learn to be a master chef',
    content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
    ],
  },
  {
    slug: 'javascript-begins',
    title: 'JavaScript Begins Here!',
    content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
    ],
  },
  {
    slug: 'black-lives-matter',
    title: 'Say Her Name!!!',
    content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
    ],
  },
  {
    slug: 'end-sars',
    title: 'Say NO To Police Brutality',
    content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum ipsum, consectetur, doloremque alias maxime qui facere ullam earum similique est eligendi quasi numquam adipisci vitae veniam totam! Nulla, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt nobis natus reiciendis velit sed asperiores expedita doloribus minus. Nobis eveniet sit reprehenderit iusto sequi cupiditate debitis alias consectetur libero!',
    ],
  },
]

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => Article.insertMany(articles))
  .then(console.log)
  .catch(console.error)
  .finally(() => mongoose.connection.close())
