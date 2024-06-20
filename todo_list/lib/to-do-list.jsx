function App() {
  const [todos, setTodos] = React.useState([
    { title: "Code a to-do list", done: false },
    { title: "Eat breakfast", done: true },
    { title: "Do some exercise", done: false },
    { title: "Water the plants", done: true }
  ]);

  const [title, setTitle] = React.useState('');

  const handleTitleChange = (event) => {
    console.log("Changing title input");
    event.preventDefault();
    setTitle(event.target.value)
  }

  const addTodo= (event) => {
    event.preventDefault();
    console.log("Adding to do...");

    if (title.trim() !== "") {
      setTodos([...todos, { title: title.trim(), done: false}]);
      setTitle('');
    }
  }

  const handleDelete = (index) => {
    console.log("Deleting to do...");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    document.activeElement.blur();
  }

  const handleCheckbox = (index) => {
    console.log("inside checkbox");
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }



  const shouldBeChecked = true
  return (
    <div className="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div className="rounded shadow-sm p-5">
            <h1 id="title">Just do it.<div id="border"></div></h1>
            <form className="my-3 d-flex" onSubmit={addTodo}>
              <div className="form-floating me-3 flex-grow-1">
                <input type="text" id="todoTitle" value={title} onChange={handleTitleChange} className="form-control" />
                <label for="todoTitle" className="text-black-50">Add To Do:</label>
              </div>
              <button type="button" onClick={addTodo} className="btn btn-outline-secondary">Add</button>
            </form>
            <ul className="list-group list-group-flush">
              {todos.map((todo, index) => (
                <li className="list-group-item d-flex align-items-center" key={`${index}-${todo}`}>
                  <input className="form-check-input me-1" type="checkbox" checked={todo.done} onChange={() => handleCheckbox(index)} />
                  <span className={todo.done ? "text-decoration-line-through text-muted flex-grow-1" : "flex-grow-1"}>
                    {index + 1}. {todo.title}
                  </span>
                  <button className="btn-close" style={{ color: 'red' }} onClick={() => handleDelete(index)}></button>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
