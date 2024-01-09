import { useSelector } from "react-redux"
import Todo from "./Todo";






const TodoList =()=>{

 const todos = useSelector((state)=> state.todos);


    return(

        <ul className="list-group mt-4">
            {
                todos.map((todo)=>{
                    return <Todo id={todo.id} title={todo.title} key={todo.id} />
                })
            }
        
        </ul>
    )
}

export default TodoList