import { Router } from "express";
import { fileUpload, fileValidation } from "../../utils/multer.js";
import * as categoryController from "./controller/category.js";
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Category Module" });
});

router.post(
  "/",
  fileUpload(fileValidation.image).single("image"),
  categoryController.createCategory
);

export default router;
