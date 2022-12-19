import TodoContent from './TodoContent';

function TodoItem(props) {
  return (
    <li
      className={`list-group-item p-3 border-l-2 border-l-${
        props.completed ? 'success' : 'warning'
      }`}
    >
      <TodoContent title={props.title} completed={props.completed} />
    </li>
  );
}

export default TodoItem;