import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,removeTodo } from "../app/features/Todo/todoSlice";

const ToDo = () => {
        const todo = useSelector(state => state.todos)
        const dispatch = useDispatch();
        console.log(todo)
    return(
        <div>
            {todo.map((todo)=>{
                return (<li key={todo.id}>
                    {todo.text}
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>
                        X
                    </button>
                </li>)
            })}
        </div>
    );
}

export default ToDo;