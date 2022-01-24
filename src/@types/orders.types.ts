import { OrdersConstants } from "../redux/contants/orders.constants";
import { IProduct } from "./products.types";

export interface GET_ORDERS_START {
  type: OrdersConstants.GET_ORDERS_START;
}

export interface GET_ORDERS_SUCCESS {
  type: OrdersConstants.GET_ORDERS_SUCCESS;
  payload: {};
}

export interface GET_ORDERS_FAIL {
  type: OrdersConstants.GET_ORDERS_FAIL;
  payload: string;
}



export interface IOrder {
  user: string;
  orderItems: {
    itemTotalPrice: number;
    qty: number;
    product: IProduct;
  }[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  clientSecret?: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
}
export type ActionsType = GET_ORDERS_START | GET_ORDERS_SUCCESS | GET_ORDERS_FAIL;