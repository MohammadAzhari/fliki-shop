import { Router } from "express";
import productController from "../controllers/productController";

const router: Router = Router();

router.get("/", productController.listProducts);
router.get("/:id", productController.getProduct);

export default router;
