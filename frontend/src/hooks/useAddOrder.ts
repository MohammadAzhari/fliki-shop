import { useState } from "react";
import orderApi from "../api/orderApi";
import { ICreateOrder } from "../models/Order";
import { cartAtom, totalPriceAtom } from "../state/atoms/cartAtom";
import { useAtom, useAtomValue } from "jotai";
import cartActions from "../state/actions/cartActions";

const useAddOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const cartItems = useAtomValue(cartAtom);
  const totalAmount = useAtomValue(totalPriceAtom);
  const [, clearCart] = useAtom(cartActions.clearCart);

  const addOrder = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const addOrderBody: ICreateOrder = {
        products: cartItems.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        totalAmount: parseInt(totalAmount, 10),
      };
      await orderApi.addOrder(addOrderBody);
      setIsSuccess(true);
      // clear cart
      clearCart();
    } catch (error) {
      setError("Error adding order");
    }
    setIsLoading(false);
  };

  return {
    success: isSuccess,
    isLoading,
    error,
    addOrder,
  };
};

export default useAddOrder;
