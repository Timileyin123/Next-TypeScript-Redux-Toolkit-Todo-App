import {useAppDispatch, useAppSelector} from '../components/store/Store';
import { getTodo, add, remove } from '@/components/store/slices/todoSlice';
import NewTodo from '../components/newTodo/NewTodo';
import Todos from '../components/Todos/Todos';
import {Todo} from '../components/store/slices/todoSlice';


function App() {

  const dispatch = useAppDispatch();

  const todo: Todo[] = useAppSelector(getTodo)

  const addToHandler = (todo: Todo) => { 
    dispatch(add(todo))  
  } 

  const onRemoveTodoHandler = (todo: Todo) => {
    dispatch(remove(todo))
  }

  return (
    <div>
      <NewTodo onAddTodo={addToHandler}/>
      <Todos items={todo} onRemoveTodo={onRemoveTodoHandler}/>
    </div>
  );

}

export default App;