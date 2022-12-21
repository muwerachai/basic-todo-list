function SearchStatus(props) {
    return (
    <div className="btn-group">
        <input
            type="radio" 
            className="btn-check" 
            name="status" 
            id="all" 
            onChange={() => props.changeSearchStatus(null)}
            defaultChecked
        />
        <label className="btn btn-outline-secondary" htmlFor="all">
         <i className="fa-solid fa-list-ul"/>
        </label>
        <input 
            type="radio" 
            className="btn-check" 
            name="status" 
            id="completed" 
            onChange={() => props.changeSearchStatus(true)}
        />
        <label className="btn btn-outline-secondary" htmlFor="completed">
         <i className="fa-solid fa-clipboard-check"/>
        </label>
        <input 
            type="radio" 
            className="btn-check" 
            name="status" 
            id="pending" 
            onChange={() => props.changeSearchStatus(false)}
        />
        <label className="btn btn-outline-secondary" htmlFor="pending">
         <i className="fa-solid fa-clipboard"/>
        </label>
</div>
     
        );
    }
    export default SearchStatus;