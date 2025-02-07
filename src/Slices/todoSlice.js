import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todoText = action.payload.todoText;
            state.todoList.push({id: state.todoList.length + 1, todoData: todoText, finished: false})
        },
        editTodo: (state, action) => {
           // console.log(state);
            let todo = action.payload.todo;
            let todoText = action.payload.todoText;
            state.todoList = state.todoList.map((t) => 
                t.id === todo.id ? { ...t, todoData: todoText } : t
            );
        },
        todoFinished: (state, action) => { 
            let todo = action.payload.todo;
            let isFinished = action.payload.isFinished;
            state.todoList = state.todoList.map((t) => 
                t.id === todo.id ? { ...t, finished: isFinished } : t
            );
        },
        deleteTodo: (state, action) => { 
            let todoId = action.payload.todoId;

            state.todoList = state.todoList.filter((t) => t.id !== todoId);
        }
    }
})

export const {addTodo, editTodo, todoFinished, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;