import { createSlice } from '@reduxjs/toolkit';

interface Item {
    productSku: string
    quantity: number
    color: string
    size: string
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: [] as Item[],
  reducers: {
    addToBag: (state, action) => {
        return action?.payload; 
      },
      removeFromBag: (state, action) => {
         const c = [...state]
        c.splice(action?.payload, 1)
        return c
      },
      clearBag: () => {
        return []; 
      }
  },
});

export const { addToBag, clearBag, removeFromBag } = counterSlice.actions;
export default counterSlice.reducer;
