import { Component } from "react";
import { connect } from "react-redux";
import { addTodo, completeTodo, deleteTodo, loadTodos } from "../store/todo";

class Home extends Component {
  state = {
    todos: [],
    todo: ""
  };

  handleTodoSelect = (isChecked, todo) => {
    console.log(isChecked, todo);
    let update = { ...todo };
    update.isCompleted = isChecked;
    this.props.updateTodo(update);
  };

  handleInput = (e) => {
    this.setState({ todo: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <div className="todo-container">
          {this.props.todos.map((todo) => (
            <div className="item" key={todo.id}>
              <span>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => this.props.completeTodo(todo.id)}
                />
                <span className={todo.isCompleted ? "todo-done" : ""}>
                  {todo.description}{" "}
                </span>
              </span>
              <button
                className="del-button"
                onClick={() => this.props.deleteTodo(todo.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="add-todo-container">
          <input
            className="input-todo"
            value={this.state.todo}
            onChange={this.handleInput}
            type="text"
          />
          <button
            className="btn"
            onClick={() => this.props.addTodo(this.state.todo)}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  loadTodos: () => dispatch(loadTodos()),
  completeTodo: (id) => dispatch(completeTodo(id)),
  addTodo: (descritpion) => dispatch(addTodo(descritpion)),
  deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
