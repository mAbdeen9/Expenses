import { createSlice } from "@reduxjs/toolkit";
import { getFormattedDate } from "../util/data";

const initialState = {
  expenses: [
    {
      name: "A Book",
      date: getFormattedDate(new Date()),
      price: "43.99",
      key: Date.now() + Math.random(),
    },
  ],
};

const expensesSlice = createSlice({
  name: "Expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (state, action) => {
      state.expenses.forEach((e) => {
        if (e.key == action.payload?.expenseInfo?.key) {
          e = action.payload.expenseInfo;
          return;
        }
      });
    },
    deleteExpense: (state, action) => {
      const newState = state.expenses.filter(
        (e) => e.key !== action.payload.expenseInfo.key
      );
      return newState;
    },
  },
});

export const expensesActions = expensesSlice.actions;
export default expensesSlice.reducer;
