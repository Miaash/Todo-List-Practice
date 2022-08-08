import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import Card from "../UI/Card";
import SubmitButton from "../UI/SubmitButton";
import ErrorModal from "../UI/ErrorModal";


const AddTodo = (props) => {
    const [ enteredDate, setEnteredDate ] = useState('');
    const [ enteredToDo, setEnteredToDo ] = useState('');
    const [ error, setError ] = useState();

    // 날짜를 입력했을 떄
    const enteredDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // todo를 입력했을 떄
    const enteredToDoHandler = (event) => {
        setEnteredToDo(event.target.value);
    }

    // 추가 버튼을 눌렀을 때
    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredDate.trim().length === 0 || enteredToDo.trim().length === 0) {
            setError({
                    title : "Invalid input",
                    message : "Please enter a valid date and input (non-empty values)."
                })
            return;
        }

        // 핸들러는 app.js에 있고 여기선 파라미터를 담아서 실행만 시켜준다.
        props.onAddToDo(enteredDate, enteredToDo);
        setEnteredDate('');
        setEnteredToDo('');
    }

    const ErrorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {/* 에러가 참일때만 에러 모달창을 보여줌 => 즉, 에러가 생길때 모달창 띄움 */}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="date">Date</label>
                    <input 
                    type="date" 
                    id="date" 
                    onChange={enteredDateHandler}
                    value={enteredDate}
                    />
                    <label htmlFor="content">To-do</label>
                    <input 
                    type="text" 
                    id="content" 
                    placeholder="Enter your To-do" 
                    onChange={enteredToDoHandler}
                    value={enteredToDo}
                    />
                    <SubmitButton type="submit">Add</SubmitButton>
                </form>
            </Card>
        </div>
    )
}

export default AddTodo;