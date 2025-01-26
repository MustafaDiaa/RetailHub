import mongoose, { model, Schema, Types } from "mongoose";

const categoryScheme = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: false, // To be converted to True after Prototype
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel =
  mongoose.model.Category || model("Category", categoryScheme);

export default categoryModel;
