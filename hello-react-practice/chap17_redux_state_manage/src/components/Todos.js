import React from 'react';


const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input 
       type="checkbox"
          onClick={() => onToggle(todo.id)} 
          checked={todo.done}
          readOnly={true}    
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </div>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">register</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};


export default Todos;