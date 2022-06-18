import './App.css';
import {useState,useEffect} from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { FiEdit } from 'react-icons/fi';



const getLocalItems = () =>{
  let list = localStorage.getItem('list');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return []
  }
}


function App() {
  const[inputdata, setInputdata] = useState("");
  const[items, setItems] = useState(getLocalItems());
  const[toggleBtn, setToggleBtn] = useState(true);
  const[isEditItem, setEditItem] =useState(null);

  const addItems = () =>{
 if(!inputdata){
 alert("please fill the field")
 }else if(inputdata && !toggleBtn) {
      setItems(
        items.map((elem) =>{
          if(elem.id === isEditItem){
            return {...elem, name: inputdata}

          }
          return elem
        })
        
        )
        setToggleBtn(true)

        setInputdata('');
      
        setEditItem(null);

 }
 
 else {
  let newIdData = {id: new Date().getTime().toString(), name:inputdata}
  setItems([...items, newIdData])
  setInputdata('')
 }

 
  }
 
const deleteItems = (index) =>{
  const newItems = items.filter((elem) => elem.id !== index);
  setItems(newItems)
}
const clearAll = () =>{
  setItems([])
}

const editItems = (ind) =>{
  const editData = items.find((elem) => elem.id === ind)
  // setItems(editData)
  setToggleBtn(false)

  setInputdata(editData.name);

  setEditItem(ind);
}

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(items))
}, [items]);

  return (
 <div className='App'>
 
 <h1>Todo App</h1>
 <div className='inputDiv'>
 <input placeholder='something wrote' value={inputdata} onChange={ (e) => setInputdata(e.target.value)}/>
 {
  toggleBtn ? <GrAddCircle className='addItems' onClick={addItems}/> : <FiEdit className='addItems editBtn' onClick={addItems} />
 }
 </div>
 <div className='showItems'>
{
  items.map((elem) => {
    return(
      <div className='itemList' key={elem.id}>
      <h3>{elem.name}</h3>
     <div>
     <FiEdit className='editBtn' onClick={ () => editItems(elem.id)}/>
       <AiFillDelete className='deleteItems' onClick={ () => deleteItems(elem.id)}/>
     </div>
      </div>
    )
  })
}

<div className='clearBtn'>
<button onClick={() => clearAll()}> Clear All</button>
</div>
 </div>

 </div>
  )
}
        
      
  






export default App;
