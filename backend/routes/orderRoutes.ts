import { Router } from "express";
import orderController from "../controllers/orderController";

const router: Router = Router();

router.post("/", orderController.ceateOrder);

export default router;
