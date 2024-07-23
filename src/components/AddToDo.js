import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/Todo/todoSlice";

const AddToDo = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()


    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return(
        <div>
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                    type="text"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
                <button type="submit" >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddToDo;