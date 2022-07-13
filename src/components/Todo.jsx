import Styles from'./Todo.css';
import AddTodo from'./AddTodo';
import { useState } from 'react';
// var todoItem=[];

const Todo=()=>{
    // const [todoItem,settodoItem]=useState('first');
    // var todoItem=['first','s'];
    
    const [todoItem,settodoItem]=useState(['first','second'])
    console.log(todoItem)
    function handleDelete(){
        settodoItem(...todoItem)
        console.log(todoItem)
    }
    return(
        <>
        <AddTodo todoItem={todoItem} state={settodoItem}/>
        <div className='card'>
                {todoItem.map((item)=>
                <>
                <div className="todo">
                    {item}
                 <button className="delete" onClick={handleDelete}>Delete</button>
                 </div>
                </>
                  )}
                   
        </div>
        </>
    )
}
export default Todo;