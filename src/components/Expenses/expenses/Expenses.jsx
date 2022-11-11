import React, { Component } from "react";
import { TodoContext } from "../../../store/todo-context";
import Cart from "../../UI/cart/Cart";
import ExpensesChart from "../expenses_chart/ExpensesChart";
import ExpensesFilter from "../expenses_filter/ExpensesFilter";
import ExpensesList from "../expenses_list/ExpensesList";
import clasess from "./Expenses.module.css";

export default class Expenses extends Component {

  render() {
    return (
      <Cart className={clasess.expenses}>
        <ExpensesChart />
        <ExpensesFilter />
        <ExpensesList />
      </Cart>
    );
  }
}
