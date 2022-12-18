function SearchStatus() {
    return (
    <div className="btn-group">
        <input type="radio" className="btn-check" name="status" id="all" />
        <label className="btn btn-outline-secondary" htmlfor="all">
         <i className="fa-solid fa-list-ul"/>
        </label>
        <input type="radio" className="btn-check" name="status" id="completed" />
        <label className="btn btn-outline-secondary" htmlfor="completed">
         <i className="fa-solid fa-clipboard-check"/>
        </label>
        <input type="radio" className="btn-check" name="status" id="pending" />
        <label className="btn btn-outline-secondary" htmlfor="pending">
         <i className="fa-solid fa-clipboard"/>
        </label>
</div>
     
        );
    }
    export default SearchStatus;