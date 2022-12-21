import { useState } from 'react';
import TodoContent from './TodoContent';
import EditBar from './EditBar';

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(prevIsEditing => !prevIsEditing);
  };

  return (
    <li
      className={`list-group-item p-3 border-l-2 border-l-${
        props.completed ? 'success' : 'warning'
      }`}
    >
      {isEditing ? (
        <EditBar
        toggleEditing={toggleEditing}
        updateTodo={props.updateTodo}
        id = {props.id}
        title={props.title} 
        />
      ) : (
      <TodoContent
      id = {props.id}
      title={props.title} 
      completed={props.completed} 
      removeTodo={props.removeTodo}
      toggleTodo={props.toggleTodo}
      toggleEditing={toggleEditing}
      />
      )}
    </li>
  );
}

export default TodoItem;