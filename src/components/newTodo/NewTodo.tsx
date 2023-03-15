import { useRef } from "react";
import {Todo} from "../store/slices/todoSlice";
import classes from "./newTodo.module.css";

const { v4: uuidv4 } = require('uuid');

const NewTodo: React.FC<{onAddTodo: (todo: Todo) => void}> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredValue = inputRef.current!.value;

        if (enteredValue.trim().length === 0){
            return;
        }
        props.onAddTodo({id: uuidv4(), text: enteredValue});
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo App</label>
            <input type="text" id="text" ref={inputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;