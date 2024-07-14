import { IOrder } from "../../@types/order";
import Order from "./order.schema";

const createOrder = async (order: IOrder) => {
  const newOrder = new Order(order);
  return await newOrder.save();
};

const getAllOrders = async (skip: number, limit: number) => {
  return await Order.find({})
    .populate("owner", { password: 0 })
    .skip(skip)
    .limit(limit);
};
const getClientOrders = async (owner: string, skip: number, limit: number) => {
  return await Order.find({ owner }).skip(skip).limit(limit);
};

const getOrdersCount = async () => {
  const count = await Order.estimatedDocumentCount();
  return count;
};

export { createOrder, getAllOrders, getOrdersCount, getClientOrders };
