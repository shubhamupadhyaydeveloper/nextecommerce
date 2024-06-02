import { create } from "zustand";
import { Tproduct } from "@/types/types";
import { TproductSizes } from "@/types/model";

type store = {
  cart: Tproduct[];
  addToCart: (item: Tproduct) => void;
  removeToCart: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
};

const globalState = create<store>()((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const isAlreadyAdded = state.cart.some(
        (item) => item?._id === product?._id && item.size === product.size
      );

      if (isAlreadyAdded) {
        return {
          cart: state.cart.map((item) =>
            item._id === product._id && item.size === product.size
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity <= item.sizeStock
                    ? item.quantity + product.quantity
                    : item.quantity,
                }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, product],
        };
      }
    }),
  removeToCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item?._id != id) })),
  onIncrement: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity++ } : item
      ),
    })),
  onDecrement: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity-- } : item
      ),
    })),
}));

export default globalState;
