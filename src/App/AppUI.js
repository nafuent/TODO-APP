import React from "react";
import {TodoCounter} from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from "../components/TodoContext";
import { Modal } from "../components/modal";
import {TodoForm} from "../components/TodoForm";

function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
      
        <TodoSearch/>
  
            <TodoList>
            {error && <p> Hubo un error</p>}
            {loading && <p>Estamos cargando </p>}
            {(!loading && !searchedTodos.length) && <p> Crea tu primer TODO </p>}
  
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={ () => completeTodos(todo.text) }
                onDelete = { () => deleteTodo(todo.text) }
              />
            ))}
          </TodoList>

          {openModal && (
            <Modal><TodoForm></TodoForm></Modal>
          )}
  
        <CreateTodoButton setOpenModal={setOpenModal}/>
      </React.Fragment>
    );
}

export {AppUI}