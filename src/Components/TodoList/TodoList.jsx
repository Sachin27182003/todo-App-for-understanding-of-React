import Todo from "../Todo/Todo"
import {useSelector } from "react-redux";

function TodoList({todoFinished, deleteTodo, editTodo}){

    const list = useSelector((state) => state.todo);

    function changeFinished(todo, isFinished){
        todoFinished(todo, isFinished);
    }

    function onDelete(todo){
        deleteTodo(todo.id);
    }

    function onEdit(todo, todoText){
        editTodo(todo, todoText);
    }

    return (
        <div>
        {list.length > 0 && list.map((todo) => <Todo 
                                                    key={todo.id} 
                                                    id={todo.id} 
                                                    isFinished={todo.finished} 
                                                    todoData={todo.todoData} 
                                                    changeFinished = {(isFinished)=> changeFinished(todo, isFinished)}
                                                    onDelete = {() => onDelete(todo)}
                                                    onEdit = {(todoText) => onEdit(todo, todoText)}
                                                />
                                    )
        }
        </div>
    )
}

export default TodoList;