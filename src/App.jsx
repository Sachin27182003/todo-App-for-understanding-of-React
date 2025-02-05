import { useReducer} from 'react';
import './App.css'
import todoDispatchContext from './Contex/todoDispatchContext';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import TodoContex from './Contex/TodoContex';
import todoReducer from './Reducers/todoReducers';

function App() {

// const [list, setList] = useState([
//   {id: 1, todoData: 'todo 1', finished: false},
//   {id: 2, todoData: 'todo 2', finished: true}
// ]);

const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContex.Provider value={{list}}>
    <todoDispatchContext.Provider value={{dispatch}} >
    <AddTodo  />
    <TodoList />
    </todoDispatchContext.Provider>
    </TodoContex.Provider>
  )
}

export default App;

// list={list} updateList={setList} 
//setList([...list, {id: list.length + 1,todoData: todo, finished: false}])