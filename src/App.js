import EditBar from './component/EditBar';
import Pagination from './component/Pagination';
import SearchBox from './component/SearchBox';
import SearchStatus from './component/SearchStatus';
import ShowAmount from './component/ShowAmount';
import ShowItem from './component/ShowItem';
import TodoList from './component/TodoList';
function App() {
  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar />
      <div className="d-flex gap-3 my-4">
      <SearchBox />
      <SearchStatus />
      </div>
      <ShowItem />
      <TodoList />
      <div className="d-flex justify-content-between align-items-center">
      <ShowAmount />
      <Pagination />
      </div>
     
    </div>
  );
}

export default App;
