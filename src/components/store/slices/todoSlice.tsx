import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface Todo {
    id: string;
    text: any;
}


export interface IInitialState {
    todos: Todo[]
}

const initialState: IInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Todo>) {
            const currentState: Todo[] = [...state.todos]
            const newState: Todo[] = currentState.concat(action.payload); 
            state.todos = newState; 
    },
        remove(state, action: PayloadAction<Todo>) {
            const currentState: Todo[] = [...state.todos]
            const newState: Todo[] = currentState.filter((todo) => todo.id !== action.payload.id)
            state.todos = newState        
        }
    }
})

export const getTodo = (state: RootState): Todo[] => state.todo.todos;

export const {add, remove} = todoSlice.actions;

export default todoSlice.reducer;

