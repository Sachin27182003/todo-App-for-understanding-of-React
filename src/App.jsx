import { useDispatch } from 'react-redux';
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import { bindActionCreators } from 'redux';
//import { todoFinished, addTodo, deleteTodo, editTodo} from './Actions/todoActions';
import todoReducer, { addTodo, editTodo, todoFinished, deleteTodo } from './Slices/todoSlice';

function App() {

// const [list, setList] = useState([
//   {id: 1, todoData: 'todo 1', finished: false},
//   {id: 2, todoData: 'todo 2', finished: true}
// ]);

const dispatch = useDispatch();
const actions = bindActionCreators({todoFinished, addTodo, deleteTodo, editTodo}, dispatch)


  return (
    <>
    <AddTodo addTodo={actions.addTodo} />
    <TodoList todoFinished={actions.todoFinished} deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} />
    </>
  )
}

export default App;

// list={list} updateList={setList} 
//setList([...list, {id: list.length + 1,todoData: todo, finished: false}])