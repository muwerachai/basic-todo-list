function TodoContent(props) {
    return (
        <div className="d-flex align-items-center">
            <span 
                className="flex-grow-1" 
                role="button" 
                onClick={props.toggleEditing}
            >
                {props.title}
            </span>
            <div className="btn-group">
                <button
                 className="btn btn-outline-info"
                 onClick={() => props.toggleTodo(props.id)} >
                    <i 
                        className={`fa-solid fa-toggle-${props.completed ? 'on' : 'off'}`}
                    />
                </button>
                <button
                     className="btn btn-danger" 
                     onClick={() => props.removeTodo(props.id)}
                >
                    <i className="fa-regular fa-trash-can" />
                </button>
        </div>
    </div>
        );
    }
    export default TodoContent;