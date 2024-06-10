import express from "express";

import verifyLogin from "../middleware/verifyLogin";
import { validatePayload } from "../middleware/validatePayload";
import {
  httpCreateOrder,
  httpGetOrders,
} from "../controllers/order.controller";
import { orderValidationSchema } from "../models/order/order.validation";
import uploadFile from "../middleware/uploadFile";

const orderRoutes = express.Router();

orderRoutes.post(
  "/",
  [
    verifyLogin,
    uploadFile.array("attachments"),
    validatePayload(orderValidationSchema),
  ],
  httpCreateOrder
);

orderRoutes.get("/", verifyLogin, httpGetOrders);
export default orderRoutes;
