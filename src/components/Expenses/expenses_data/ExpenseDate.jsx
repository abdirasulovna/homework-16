import React, { Component } from "react";
import clasess from "./ExpenseDate.module.css";

class ExpenseDate extends Component {
  render() {
    const month = this.props.date.toLocaleString("en-US", { month: "long" });
    const day = this.props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = this.props.date?.getFullYear();
    return (
      <div className={clasess.expense_date}>
        <div className={clasess.expense-month}>{month}</div>
        <div className={clasess.expense-year}>{year}</div>
        <div className={clasess.expense-day}>{day}</div>
      </div>
    );
  }
}

export default ExpenseDate;
