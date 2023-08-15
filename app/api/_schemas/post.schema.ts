import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required!'],
    },
    description: {
      type: String,
      required: [true, 'Description is required!'],
    },
    topic: {
      type: String,
      enum: ['Training', 'Motivation', 'Nutrition'],
      required: [true, 'Topic is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

PostSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

PostSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Post = models.Post || model('Post', PostSchema);

export default Post;
