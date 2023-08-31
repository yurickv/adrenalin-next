import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required!'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const User = models.User || model('User', UserSchema);

export default User;
