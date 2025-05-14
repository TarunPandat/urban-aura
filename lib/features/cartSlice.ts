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
        return [...state, action.payload]; 
      },
      clearBag: () => {
        return []; 
      }
  },
});

export const { addToBag, clearBag } = counterSlice.actions;
export default counterSlice.reducer;
