import React, { useState } from "react";
import classes from "./AddMemo.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";


const AddMemo = (props) => {
    const [ enteredDate, setEnteredDate ] = useState('');
    const [ enteredToDo, setEnteredToDo ] = useState('');


    const enteredDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const enteredToDoHandler = (event) => {
        setEnteredToDo(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDafault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="date">Date</label>
                <input 
                type="date" 
                id="date" 
                onChange={enteredDateHandler}
                />
                <label htmlFor="content">To-do</label>
                <input 
                type="text" 
                id="content" 
                placeholder="Enter your To-do" 
                onChange={enteredToDoHandler}
                />
                <Button type="submit"/>
            </form>
        </Card>
    )
}

export default AddMemo;