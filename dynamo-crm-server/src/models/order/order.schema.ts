import mongoose, { Schema } from "mongoose";
import { IOrder, IOrderModel } from "../../@types/order";

const orderSchema = new mongoose.Schema<IOrder, IOrderModel>({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  order_name: {
    type: String,
    required: true,
  },
  order_type: {
    type: String,
    enum: ["digitizing", "vector"],
    required: true,
  },
  number_of_colors: {
    type: Schema.Types.Mixed,
    required: true,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  rush: {
    type: Boolean,
    default: false,
  },
  additional_instruction: {
    type: String,
  },
  attachments: {
    type: [String],
    required: true,
  },
  digitize_properties: {
    type: {
      digitize_type: {
        type: String,
        required: true,
        enum: ["hat_logo", "left_chest", "middle_left_chest", "jacket_bag"],
      },
      height: {
        type: Schema.Types.Mixed,
        required: true,
      },
      width: {
        type: Schema.Types.Mixed,
        required: true,
      },
      fabric: {
        type: String,
        required: true,
      },
      placement: {
        type: String,
        required: true,
      },
    },
    required: function () {
      return this.order_type === "digitizing";
    },
  },
  status: {
    type: String,
    enum: ["pending", "processing", "delivered"],
    default: "pending",
  },
  bill_paid: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model<IOrder, IOrderModel>("Order", orderSchema);

export default Order;
