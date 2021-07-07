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
        value:{
            type: Number,
        },
        unit:{
            type: String,
        }
    },
    author:{
        name:{
            type:String,
        }, 
        avatar:{
            type:String,
        },
    },
    content:{
        type: String,
        required: true,
    },

    comments: [
        {
          commentId: String,
          title: String,
          comment: String,
        },
      ],
  },
  {
    timestamps: true, // adding createdAt and modifiedAt automatically
  }
)

export default model("Posts", PostSchema) // bounded to "posts" collection
