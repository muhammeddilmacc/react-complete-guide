
import React, { useState } from 'react';


import Card from '../UI/Card'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'


export default function ExpenseItem(props) {
    
    const [title, setTitle] = useState(props.title);

    const changeTitle = () => {
        setTitle('Updated!');
    }

    return (
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className='expense-item__description'>
                <h2> {title} </h2>
                <div className='expense-item__price'> ${props.amount}  </div>
            </div>
            <button onClick={changeTitle}>Change title</button>
        </Card>
    )
}
