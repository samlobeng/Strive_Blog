import express from "express"
import createError from "http-errors"

import PostModel from "./schema.js"

const postsRouter = express.Router()

postsRouter.post("/", async (req, res, next) => {
  try {
    const newPost = new PostModel(req.body)
    const { _id } = await newPost.save()
    res.status(201).send({ _id })
  } catch (error) {
    if (error.name === "ValidationError") {
      next(createError(400, error))
    } else {
      console.log(error)
      next(createError(500, "An error occurred while creating new post"))
    }
  }
})

postsRouter.get("/", async (req, res, next) => {
  try {
    const posts = await PostModel.find()
    res.send(posts)
  } catch (error) {
      console.log(error)
    next(createError(500, "An error occurred while getting users' list "))
  }
})

postsRouter.get("/:postId", async (req, res, next) => {
  try {
    const postId = req.params.postId

    const post = await PostModel.findById(postId)

    if (post) {
      res.send(post)
    } else {
      next(createError(404, `Post with _id ${postId} not found!`))
    }
  } catch (error) {
    next(createError(500, "An error occurred while getting posts "))
  }
})

postsRouter.delete("/:postId", async (req, res, next) => {
  try {
    const postId = req.params.postId

    const deletedPost = await PostModel.findByIdAndDelete(postId)

    if (deletedPost) {
      res.status(204).send()
    } else {
      next(createError(404, `Post with _id ${postId} not found!`))
    }
  } catch (error) {
    next(createError(500, `An error occurred while deleting post ${req.params.postId}`))
  }
})

postsRouter.put("/:postId", async (req, res, next) => {
  try {
    const postId = req.params.postId

    const updatedPost = await PostModel.findByIdAndUpdate(postId, req.body, {
      new: true,
      runValidators: true,
    })

    if (updatedPost) {
      res.send(updatedPost)
    } else {
      next(createError(404, `Post with _id ${postId} not found!`))
    }
  } catch (error) {
    next(createError(500, `An error occurred while updating user ${req.params.postId}`))
  }
})
// comments route
postsRouter.post("/:id", async (req, res, next) => {
    
  })
  
  postsRouter.get("/:id/comments", async (req, res, next) => {
    try {
      
    } catch (error) {
      next(createError(500, "Generic Error"))
    }
  })
  
  postsRouter.get("/:id/comments/:commentId", async (req, res, next) => {
   
  })
  
  postsRouter.delete("/:id/comment/:commentId", async (req, res, next) => {
    
  })
  
  postsRouter.put("/:id/comment/:commentId", async (req, res, next) => {
   
  })

export default postsRouter
