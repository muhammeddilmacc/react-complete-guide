import React, {useState} from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false); // this is a state that is only relevant to this component.

    const startEditingHandler = () => {
        setIsEditing(true);
    };// this is a function pointer to the function in App.js

    const stopEditingHandler = () => {
        setIsEditing(false);
    };// this is a function pointer to the function in App.js

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); // this is a function pointer to the function in App.js
    };



    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}
