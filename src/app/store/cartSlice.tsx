import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  color: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity += 1; // Increase totalQuantity only for new items
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
