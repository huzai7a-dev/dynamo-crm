import { Model } from "mongoose";
import { Document, Schema, model } from "mongoose";

interface IDigitizeProperties {
  digitize_type: "hat_logo" | "left_chest" | "middle_left_chest" | "jacket_bag";
  height: number | string;
  width: number | string;
  fabric: string;
  placement: string;
}

interface IOrder extends Document {
  owner: String;
  order_name: string;
  order_type: "digitizing" | "vector";
  number_of_colors: number | string;
  gradient?: Boolean;
  additional_instruction?: string;
  rush?: Boolean;
  attachments: [string];
  digitize_properties?: IDigitizeProperties;
  status: "pending" | "processing" | "delivered";
  bill_paid: Boolean;
  created_at: Date;
  updated_at: Date;
}

type IOrderModel = Model<IOrder>;
export type { IOrder, IOrderModel };
