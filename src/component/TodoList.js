import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className="list-group my-2">
  {props.todos.map(item => (
    <TodoItem
    key={item.id}
    id={item.id}
    title={item.title} 
    completed={item.completed} 
    removeTodo={props.removeTodo}
    toggleTodo={props.toggleTodo}
    updateTodo={props.updateTodo}
    />
    ))}
    </ul>
  );
}

export default TodoList;