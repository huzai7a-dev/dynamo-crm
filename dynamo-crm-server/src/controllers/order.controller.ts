import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { getPagination, uploadFiles } from "../utils/helper";

import {
  createOrder,
  getAllOrders,
  getOrdersCount,
} from "../models/order/order.mongoose";
import { AuthUserReq } from "../@types/user";

const httpCreateOrder = async (req: Request, res: Response) => {
  const payload = req.body;
  const { _id } = req.user as AuthUserReq;
  const files = req.files as any;
  let attachments: any[] = [];

  if (!files)
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: "Attachments are required",
    });

  attachments = await uploadFiles(files);

  const newCreatedOrder = await createOrder({
    owner: _id,
    ...payload,
    attachments,
  });

  return res.send({ message: "Order created", data: newCreatedOrder });
};

const httpGetOrders = async (req: Request, res: Response) => {
  const count = await getOrdersCount();
  const { limit, skip, paginationData } = getPagination(req.query, count);
  const orders = await getAllOrders(skip, limit);
  return res.status(StatusCodes.OK).send({ data: orders, ...paginationData });
};

export { httpCreateOrder, httpGetOrders };
