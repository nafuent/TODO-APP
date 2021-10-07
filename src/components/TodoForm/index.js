import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"


function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal, 
    }=React.useContext(TodoContext);

    const onChange = (evento) =>{
        setNewTodoValue(evento.target.value)
    }

    const onCancel=() =>{
        setOpenModal(false)
    }

    const onSubmit =(event) =>{
        //todo
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form
            onSubmit={onSubmit}
        >
            <label>..</label>
            <textarea 
            placeholder = "Type your new task!"
            onChange = {onChange}
            value = {newTodoValue}
            />
            <div
                className = "TodoForm-buttonContainer"
            >
                <button type = "submit" className = "TodoForm-button TodoForm-button-add">
                    Añadir</button>

                <button
                    type = "button"
                    onClick = {onCancel}
                    className = "TodoForm-button TodoForm-button-cance"
                    >Cancelar
                </button>
            </div>
            

        </form>
    )

}

export {TodoForm};
