import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); // this is a function pointer to the function in App.js
    };


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
