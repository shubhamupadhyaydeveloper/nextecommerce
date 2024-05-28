import { create } from "zustand";
import { Tproduct } from "@/types/types";

type store = {
  cart: Tproduct[];
  addToCart: (item: Tproduct) => void;
  removeToCart: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
};

const globalState = create<store>()((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
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
