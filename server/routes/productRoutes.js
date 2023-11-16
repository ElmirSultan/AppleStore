import express from "express";
import {
  addProduct,
  deleteProduct,
  showProducts,
  updateProduct
} from "../controllers/products.js";

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/show-products", showProducts);
router.delete("/delete-product", deleteProduct);
router.put("/update-product",updateProduct)

export default router;
