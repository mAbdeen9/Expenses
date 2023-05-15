import { createSlice } from "@reduxjs/toolkit";
import { getFormattedDate } from "../util/data";

const initialState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: "Expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [action.payload, ...state.expenses];
    },
    updateExpense: (state, action) => {
      state.expenses.forEach((e) => {
        if (e.key == action.payload.key) {
          e.name = action.payload.updatedExpense.name;
          e.price = action.payload.updatedExpense.price;
          e.date = action.payload.updatedExpense.date;
          return;
        }
      });
    },
    deleteExpense: (state, action) => {
      const newState = state.expenses.filter((e) => e.key !== action.payload);
      state.expenses = newState;
    },
  },
});

export const expensesActions = expensesSlice.actions;
export default expensesSlice.reducer;
