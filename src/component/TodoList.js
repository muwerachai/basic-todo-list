import TodoItem from './TodoItem';

function TodoList() {
  return (
    <ul className="list-group my-2">
      <TodoItem completed title="Shopping" />
      <TodoItem title="Dinner" />
      <TodoItem title="Swimming" />
    </ul>
  );
}

export default TodoList;