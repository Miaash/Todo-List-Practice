import classes from "./Button.module.css";


const Button = (props) => {
    return (
        <>
            <button onClick={props.onSubmit} className={classes.button}>Add User</button>
        </>
    )
}

export default Button;