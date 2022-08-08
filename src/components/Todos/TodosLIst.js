import Card from "../UI/Card";
import classes from "./TodosList.module.css";
// import DeleteButton from "../UI/DeleteButton";
// import TodoItem from "./TodoItem";


const TodoList = ({ items, onDelete }) => {
    return (
        <Card className={classes.todos}>
            <ul>
                {items.map((item, index)=> (
                    <li key={index}>
                        <span className={classes.date}>
                            Date: {item.date}  
                        </span>
                        <span className={classes.todo}>
                            Todo: {item.text}
                        </span>
                        <button onClick={() => onDelete(item.id)}>delete</button>   
                    </li>
                ))}
            </ul>        
        </Card>
    )
};

export default TodoList;