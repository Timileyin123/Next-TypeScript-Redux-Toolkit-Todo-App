import { Todo } from "../store/slices/todoSlice";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{items: Todo[]; onRemoveTodo: (todo: Todo) => void}> = (props) => {
    return(
        <ul className={classes.todos}>
        {props.items.map((item, i) => (
            <TodoItem key={i} text={item.text} onRemoveTodo = {props.onRemoveTodo.bind(null, item)}/>
        ))}
        </ul>
    )
}

export default Todos;