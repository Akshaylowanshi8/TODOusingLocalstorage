import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Todo=()=>{

 const [deta , setdeta] = useState("")  
 const [todos, setTodos] = useState([]);
//  console.log(deta);

const Addtodo=()=>{
    if (deta==="")
        {
alert("Enter task")
return
        }
       else 
        {
                setTodos([...todos, { text: deta, completed: false }]);
                localStorage.setItem('todos', JSON.stringify(todos));
                alert("Add")
                setdeta('');
              }  
             
}


 useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  

  const deleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };

    const toggleTodo = (index) => {
              const newTodos = todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
              );
              localStorage.setItem('todos', JSON.stringify(newTodos)); 
              setTodos(newTodos);
            };
          
  console.log(todos);


let ans=todos.map((e,i) =>{
 return(<>
<tr className="p-3 border-2  hover:bg-slate-200">
<td className="p-3  border-2 ">{i+1}</td>
<td className="p-3   border-2">{e.text}</td>
<td className="p-3  border-2" >  
<button className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 shadow-md w-12 h-12 after:content-['✖️']  peer-checked:bg-emerald-500 peer-focus:outline-none" onClick={() => deleteTodo(i)}></button> 
</td>
    <td   >  <label className="relative inline-flex items-center cursor-pointer"  >
    <input type="checkbox" className="sr-only peer" checked={e.completed} onChange={() => toggleTodo(i)} />
    <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 shadow-md w-24 h-12 peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-gray-50 after:h-10 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500">
    </div>
  </label>
</td>

<td>  {e.completed ? "DONE" : "DO"} </td>
</tr>
</>)})
return(
<>
<h1 className="text-6xl p-5  mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">Todo App Using LocalStorage</h1>
<p>
<input className="shadow-slate-300 text-white bg-slate-500 p-2 shadow-sm border-black" value={deta} required onChange={(e)=>setdeta(e.target.value)} />
<button className="bg-lime-700 text-white p-2 " onClick={Addtodo}>ADD TODO</button>
</p>
<div className="flex flex-col justify-center h-auto mt-10 m-9 ">
<table className="text-center   border-black w-auto h-auto">
<tr className="p-2  border-2 hover:bg-slate-200">
<th className="p-4 border-2" >
  S.No
</th>
<th className="p-4  border-2">
    Task
</th>
<th className="p-4  border-2">
    Remove
</th>
<th className="p-4  border-2">
    Status
</th><th className="p-4  border-2">
    mark 
</th>
</tr>
{ans}
</table>
</div>

    </>
)
}

export default Todo ;

