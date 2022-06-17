import './App.css';
import {useState} from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { FiEdit } from 'react-icons/fi';


function App() {
  const[inputdata, setInputData] = useState('');
  const[items,setItems] = useState([]);
  const [toggleAddBtn,setToggleAddBtn] = useState(true)
  const[isEditItem, setIsEditItem] = useState(null);
 

  let addItems = () =>{
   if(!inputdata){
    alert("plaese fill the field");

   }else if(inputdata && !toggleAddBtn){
    setItems(
      items.map((elem) =>{
        if(elem.id === isEditItem){
          return { ...elem, name:inputdata}
        }
        alert("updated")
        return elem

      })

    )
    setToggleAddBtn(true);
   
      setInputData('')
   
      setIsEditItem(null)

   }
   
   else{
     let dataId = {id: new Date().getTime().toString(), name:inputdata}
    setItems([...items,dataId]);
    setInputData('');
   }
  }

   let deleteItems = (index) =>{
    var newData = items.filter((elem) =>( elem.id !== index));
    setItems(newData);
   }

  let clearAll = () =>{
    setItems([])
  }

  let editItems = (id) =>{
   let newEdit = items.find((elem) => elem.id === id);
   console.log(newEdit)
   setToggleAddBtn(false);
   
   setInputData(newEdit.name)

   setIsEditItem(id)

  }

  return (
 <div className='App'>
 
 <h1>Todo App</h1>

  <div className='inputDiv'>
    <input placeholder='something wrote here' value={inputdata}  onChange={(e) =>  setInputData(e.target.value)} />
    {

     toggleAddBtn ? <GrAddCircle className='addItems' onClick={addItems} /> : <FiEdit className='editBtn addItems' onClick={addItems} />
     

    }
   
  
     </div>
     <div className='showItems'>
     {
   items.map((elem) =>{
    return (
      <article className='itemList' key={elem.id}>
         <h2>{elem.name}</h2>
       <div>
       <FiEdit className='editBtn' onClick={() => editItems(elem.id)} />
      <AiFillDelete className='deleteItems' onClick={() => deleteItems(elem.id)}/>
       </div>

      </article>
    )
   })
     }
     </div>

     <div className='clearBtn'>
     <button onClick={() => clearAll()}>Clear All Items</button>

     </div>

 </div>
  )
        
      }
  






export default App;
