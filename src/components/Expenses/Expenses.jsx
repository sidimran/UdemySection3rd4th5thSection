import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
     <ExpensesList  items ={filteredExpenses}/>

      {/* <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      /> */}

      {/* Rendering List of Date */}
      {/* {filteredExpenses.length === 0 && <p>No expense Found</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense, index) => (
          <ExpenseItems
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </Card>
  );
};

export default Expenses;
