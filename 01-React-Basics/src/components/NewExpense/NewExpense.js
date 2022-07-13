import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
    
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setTopCardState(false);
    }

    const [topCardState, setTopCardState] = useState(false);
    const topCardStateHandler = () => {
        setTopCardState(true);
    }

    const topButtonStateHandler = () => {
        setTopCardState(false);
    }
    if (topCardState === true) {
        return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={topButtonStateHandler} />
        </div>)
    }

    return (
            <div className="new-expense">
                <button onClick={topCardStateHandler}>Add Expense</button>
            </div>
    )
};

export default NewExpense;