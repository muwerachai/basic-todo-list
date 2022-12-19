import { useState} from 'react';

function EditBar(props) {
    const [input,setInput] = useState('');
    const [error,setError] = useState('');
    const handleClickSave = () => {
        // validate error
        if (input === ''){
            setError('Title is required.');
        } else{
            setError('');
            props.createTodo(input);
            setInput('');
        }
        
    };
return (
    <>
     <div className="input-group">
        <input 
            type="text" 
            className={`form-control ${error ? 'is-invalid' : '' }`}
            value={input} 
            onChange={event => setInput(event.target.value)}
        />
        <button className="btn btn-success" onClick={handleClickSave}>
            <i className="fa-solid fa-check" />
        </button>
        <button className="btn btn-secondary" onClick={() => setInput('')}>
        <i className="fa-solid fa-xmark" />
        </button>
    </div>
    {error && <small className="text-danger">{error}</small>}
    </>
   
    );
}
export default EditBar;