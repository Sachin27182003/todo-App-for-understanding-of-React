import Todo from "../Todo/Todo"
import TodoContex from "../../Contex/TodoContex";
import { useContext } from "react";
import todoDispatchContext from "../../Contex/todoDispatchContext";

function TodoList(){
 
    const {list} = useContext(TodoContex);
    const {dispatch} = useContext(todoDispatchContext);

    function changeFinished(todo, isFinished){
        dispatch({type: 'finish_todo', payload: {todo: todo, isFinished: isFinished}})
    }

    function onDelete(todo){
        dispatch({type: 'delete_todo', payload: {todo: todo}})
    }

    function onEdit(todo, todoText){
      dispatch({type: 'edit_todo', payload: {todo: todo, todoText:todoText}})
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