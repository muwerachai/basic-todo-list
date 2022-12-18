function EditBar() {
return (
    <>
     <div className="input-group">
        <input type="text" className="form-control is-invalid" />
        <button className="btn btn-success">
            <i className="fa-solid fa-check" />
        </button>
        <button className="btn btn-secondary">
        <i className="fa-solid fa-xmark" />
        </button>
    </div>
    <small className="text-danger">Title is required.</small>
    </>
   
    );
}
export default EditBar;