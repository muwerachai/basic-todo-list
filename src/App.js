import EditBar from './component/EditBar';
import SearchBox from './component/SearchBox';
import SearchStatus from './component/SearchStatus';
function App() {
  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar />
      <div className="d-flex gap-3 my-4">
      <SearchBox />
      <SearchStatus />
      </div>
    </div>
  );
}

export default App;
