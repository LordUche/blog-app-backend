# blog-app-backend

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

A simple blog app built with MongoDB, Express, React & Node. It was built to practice deploying to an AWS EC2 instance

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

1. You'll need to have [Node.js](https://nodejs.org) installed run it on your local machine.

2. This project uses [Yarn](https://classic.yarnpkg.com) as its package manager. You can install it with npm using the following command:

```
npm install -g yarn
```

3. You also need to have a MongoDB database that you can connect to.

### Installing

To install all the project dependencies, run

```
yarn
```

To set the environment variables, create a `.env` file with the following command

```
cp .env.example .env
```

Paste your MongoDB connection string as the value of the `MONGODB_URI` in the `.env` file

To seed your database, run

```
yarn seed
```

Start the development server using

```
yarn dev
```

To get the production build, run

```
yarn build
```

Start the server using the production build with

```
yarn start
```

When the server is running, open your browser to http://localhost:1337 to see the blog 🙂

## Usage <a name = "usage"></a>

You can _upvote_ an article and add comments
