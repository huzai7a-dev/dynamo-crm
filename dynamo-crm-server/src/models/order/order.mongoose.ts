import { IOrder } from "../../@types/order";
import Order from "./order.schema";

const createOrder = async (order: IOrder) => {
  const newOrder = new Order(order);
  return await newOrder.save();
};

const getAllOrders = async () => {
  return await Order.find({}).populate("owner");
};

export { createOrder, getAllOrders };
