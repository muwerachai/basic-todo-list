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
  {id: uuidv4(), title: 'swimming',completed: false}
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar />
      <div className="d-flex gap-3 my-4">
      <SearchBox />
      <SearchStatus />
      </div>
      <ShowItem />
      <TodoList todos={todos}/>
      <div className="d-flex justify-content-between align-items-center">
      <ShowAmount />
      <Pagination />
      </div>
     
    </div>
  );
}

export default App;
