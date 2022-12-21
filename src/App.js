import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

import EditBar from './component/EditBar';
import Pagination from './component/Pagination';
import SearchBox from './component/SearchBox';
import SearchStatus from './component/SearchStatus';
import ShowAmount from './component/ShowAmount';
import ShowItem from './component/ShowItem';
import TodoList from './component/TodoList';

const initialTodos = [
  {id: uuidv4(), title: 'shopping',completed: true},
  {id: uuidv4(), title: 'dinner',completed: false},
  {id: uuidv4(), title: 'swimming',completed: false},
  {id: uuidv4(), title: 'Diving',completed: true},
  {id: uuidv4(), title: 'Golf',completed: false},
  {id: uuidv4(), title: 'Ski',completed: false},
  {id: uuidv4(), title: 'Hang Out',completed: true},
  {id: uuidv4(), title: 'RestinMeeting',completed: false},
  {id: uuidv4(), title: 'Meet a doctor',completed: false},
  {id: uuidv4(), title: 'Concert',completed: true},
  {id: uuidv4(), title: 'Mid Term Exam',completed: false},
  {id: uuidv4(), title: 'Personal Project',completed: false}
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchStatus, setSearchStatus] = useState(null);
  const [pageLimit, setPageLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);


  const createTodo = newTitle => {
    const newTodo = {id: uuidv4(), title: newTitle,completed: false};
    const cloneTodos = [...todos];
    cloneTodos.push(newTodo);
    setTodos(cloneTodos);
  };

  const removeTodo = todoId => {
    const foundIndex = todos.findIndex(item => item.id === todoId);
    const cloneTodos = [...todos];
    cloneTodos.splice(foundIndex, 1);
    setTodos(cloneTodos);
  };

  const toggleTodo = todoId => {
    const foundIndex = todos.findIndex(item => item.id === todoId);
    const cloneTodos = [...todos];
    cloneTodos[foundIndex].completed = !cloneTodos[foundIndex].completed
    setTodos(cloneTodos);
  };

  const updateTodo = (todoId ,title) => {
    const foundIndex = todos.findIndex(item => item.id === todoId);
    const cloneTodos = [...todos];
    cloneTodos[foundIndex].title = title;
    setTodos(cloneTodos);
  };

  const newUpdateTodo = (todoId ,todoObj) => {
    // { title, 'New Value', completed: false}
    const foundIndex = todos.findIndex(item => item.id === todoId);
    const cloneTodos = [...todos];
    cloneTodos[foundIndex] = {...cloneTodos[foundIndex],...todoObj};
    setTodos(cloneTodos);
  };
    // toggle: newUpdateTodo(props.id, { completed: !props.completed })
    // update: newUpdateTodo(props.id, { title: input })
  
  const changeSearchTerm = text => {
    setSearchTerm(text);
  }

  const changeSearchStatus = status => {
    setSearchStatus(status);
  }

  const changeCurrentPage = pageSelected => {
    setCurrentPage(pageSelected);
  }

//   const filteredTodos = todos.filter(item => 
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredTodosCombineStatus = filteredTodos.filter(item => {
//      if(searchStatus === null)  {
//       return true;
//      } else{
//       return item.completed === searchStatus;
//      }
// });

const filteredTodos = todos.filter(
  item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchStatus === null || item.completed === searchStatus)
);
  
const numPage = Math.ceil(filteredTodos.length / pageLimit);
// pageLimit: 5 currentPage: 1, 0 -> 4
// pageLimit: 5 currentPage: 2, 5 -> 9
// pageLimit: 5 currentPage: 3, 10 -> 14
const finalTodos = filteredTodos.slice(
  pageLimit * (currentPage - 1),
  pageLimit * currentPage
);

  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar createTodo={createTodo}/>
      <div className="d-flex gap-3 my-4">
      <SearchBox 
        changeSearchTerm={changeSearchTerm}
        searchTerm={searchTerm}
        />
      <SearchStatus changeSearchStatus={changeSearchStatus}/>
      </div>
      <ShowItem />
      <TodoList
      todos={finalTodos}
      removeTodo={removeTodo} 
      toggleTodo={toggleTodo}
      updateTodo={updateTodo}
      />
      <div className="d-flex justify-content-between align-items-center">
      <ShowAmount />
      <Pagination numPage={numPage} changeCurrentPage={changeCurrentPage}/>
      </div>
     
    </div>
  );
}

export default App;
