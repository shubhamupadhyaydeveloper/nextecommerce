import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Tproduct } from "@/types/types";
import { TproductSizes } from "@/types/model";

type store = {
  cart: Tproduct[];
  addToCart: (item: Tproduct) => void;
  removeToCart: (id: string, size: string) => void;
  onIncrement: (id: string, size: string) => void;
  onDecrement: (id: string, size: string) => void;
};

const globalState = create<store>()(
  persist(
    (set) => ({
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
                      quantity:
                        item.quantity + product.quantity <= item.sizeStock
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
      removeToCart: (id, size) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => !(item.size === size && item._id === id)
          ),
        })),
      onIncrement: (id, size) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      onDecrement: (id, size) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === id && item.size === size
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
    }),
    {
      name: "cart-store",
    }
  )
);

export default globalState;
