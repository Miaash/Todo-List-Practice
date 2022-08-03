import classes from "./DeleteButton.module.css";

const DeleteButton = (props) => {
    const onDeleteHandler = (event) => {
        props.onDelete(event)
    }
    <>
        <button className={classes.removebtn} type="button" onClick={onDeleteHandler}>Delete!</button>
    
    </>
};

export default DeleteButton;