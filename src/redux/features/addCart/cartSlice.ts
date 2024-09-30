import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
  };
  
  type CartState = {
    items: TCartItem[];
    count: number;
  };
  
  const initialState: CartState = {
    items: [],
    count: 0,
  };


  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<TCartItem>) => {
        const orderPayload = {
          _id: action.payload._id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          image: action.payload.image,
          category: action.payload.category,
        };
  
        const existingItem = state.items.find(
          (item) => item._id === action.payload._id
        );
        if (existingItem) {
          if (existingItem.quantity === action.payload.quantity) {
            throw new Error("Opps!! Already Added");
          }
  
          existingItem.quantity += 1;
        } else {
          state.items.push(orderPayload);
        }
      },
  
      clearCart: (state) => {
        state.items = [];
        state.count = 0;
      },
      removeFromCart: (state, action: PayloadAction<string>) => {
        const itemIndex = state.items.findIndex((item) => item._id === action.payload);
        if (itemIndex !== -1) {
          state.items.splice(itemIndex, 1);
        }
  
        // Update count after removal
        state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
      },
  
      cartCount: (state, action) => {
        const existingItem = state.items.find(
          (item) => item._id === action.payload
        );
  
        if (existingItem) {
          state.count = state.count;
        } else {
          state.count = state.count + 1;
        }
      },
      incrementQuantity: (state, action: PayloadAction<string>) => {
        const item = state.items.find(item => item._id === action.payload);
        if (item) {
          item.quantity += 1;
        }
      },
      decrementQuantity: (state, action: PayloadAction<string>) => {
        const item = state.items.find(item => item._id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
    },
  });
  
  export const { addToCart, clearCart, cartCount,incrementQuantity,decrementQuantity, removeFromCart } = cartSlice.actions;
  
  export default cartSlice.reducer;
  