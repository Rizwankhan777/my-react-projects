import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/menu';
import { useState } from 'react';
import items from './components/data'
import Categories from './components/categories';


const allcategories = ['all',...new Set(items.map ((item) => item.category))]

function App() {
  const[menuItems, setMenuItems] = useState(items)
  const [categories,setcategories] = useState(allcategories);

  const filterItems = (category) =>{
    if (category === 'all'){
      return setMenuItems(items);
    }
      const newItems = items.filter((item) => item.category === category)
      return setMenuItems(newItems)

  }
  return (
     <div className="container">
       <div className='row'>
         <div className='col-md-12'>
           <h2 className='text-center py-5'>Our Menu</h2>
           <Categories filterItems={filterItems} categories={categories} />

         <Menu items={menuItems} />

         </div>


       </div>

     </div>

  );
}

export default App;
