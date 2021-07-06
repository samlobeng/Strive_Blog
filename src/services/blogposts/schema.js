import mongoose from "mongoose"

const { Schema, model } = mongoose

const PostSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    readTime: {
        value:Number,
        unit: String,
    },
    author: {name: String, avatar: String},
    content:{type: String, required: true}, 
  },
  {
    timestamps: true, // adding createdAt and modifiedAt automatically
  }
)

export default model("Posts", PostSchema) // bounded to "posts" collection
