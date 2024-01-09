

import { useState } from "react"
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../To-do/actions";



const Todo =({id, title})=>{

   
    const [edit, setEdit]=useState(false);
    const [update, setUpdate]=useState(title);

    const dispatch = useDispatch()


    const handleTodo=()=>{
        if(update.trim()){

            dispatch(editTodo({id:id,title:update}));
          
            setEdit(false)

        }

    }
    const handleDelete=()=>{

        dispatch(deleteTodo(id))
    }
    const handleUpdate=(e)=>{
        setUpdate(e.target.value)
    }

    return(

       <div>
        { 
             edit ? (
                <div className="form-group">
                    <input className="from-control" type="text" value={update} onChange={handleUpdate}/>
                    <button className="btn btn-secondary" onClick={handleTodo}>Save</button> 
                </div>
            ): (

                <li className="list-group-item">
                    <p>{title}</p>
                    <div className="actions">
                        
                        <button className="btn btn-warning" onClick={()=>{setEdit(true)}}>Edit Todo</button>
                        &nbsp; &nbsp;
                        <button className="btn btn-danger" onClick={(handleDelete)}>Delete</button>

                         </div>
                </li>
            )
        }

       </div>
    )
}

export default Todo