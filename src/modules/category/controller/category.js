import slugify from "slugify";
import categoryModel from "../../../../DB/model/Category.model.js";
import cloudinary from "./../../../utils/cloudinary.js";

export const createCategory = async (req, res, next) => {
  const { name } = req.body;
  console.log(`APP_NAME: ${process.env.APP_NAME}`)
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: `${process.env.APP_NAME}/category`,
    }
  );
  const category = await categoryModel.create({
    name,
    slug: slugify(name, "-"),
    image: { secure_url, public_id },
  });

  return res
    .status(201)
    .json({ message: "Category created Successfully", category });
};
