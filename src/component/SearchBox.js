function SearchBox(props) {
    return (
         <div className="input-group">
            <input
             type="text" 
             className="form-control"
             value={props.searchTerm} 
             onChange={event => props.changeSearchTerm(event.target.value)}
            />
            <button
                className="btn btn-secondary"
                onClick={() => props.changeSearchTerm('')}
            >
            <i className="fa-solid fa-xmark" />
            </button>
        </div>
     
        );
    }
    export default SearchBox;