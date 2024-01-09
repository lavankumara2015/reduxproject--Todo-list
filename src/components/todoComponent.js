import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../To-do/actions"
import TodoList from "./TodoList"





const TodoComponent=()=>{

    const dispatch=useDispatch()

const [todoTitle , setTodoTitle]=useState("")

    const handleTodo = (e)=>{

        if(todoTitle.trim()){

            const newTodo={
                title:todoTitle
            }

           dispatch(addTodo(newTodo));
           setTodoTitle("")
        }
         
    }


    return(
        <>
        <div className='container mt-5 w-50'>  <br/>
        <h3 className='text-black text-center'>Todo app using redux react</h3> <br/>
        <div className="input-group">
        <input type="text" className="form-control" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
        <button className="btn btn-primary" onClick={()=>handleTodo()}>Add Todo</button>     
      </div>
      <TodoList/>
    </div>
        </>
    )
}
export default TodoComponent