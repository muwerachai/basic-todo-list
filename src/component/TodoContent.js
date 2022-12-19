function TodoContent(props) {
    return (
        <div className="d-flex align-items-center">
            <span className="flex-grow-1" role="button">
                {props.title}
            </span>
            <div className="btn-group">
                <button className="btn btn-outline-info">
                    <i 
                        className={`fa-solid fa-toggle-${props.completed ? 'on' : 'off'}`}
                    />
                </button>
                <button className="btn btn-danger">
                    <i className="fa-regular fa-trash-can" />
                </button>
        </div>
    </div>
        );
    }
    export default TodoContent;