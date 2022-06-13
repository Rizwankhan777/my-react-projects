import logo from './logo.svg';
import './App.css';
import Tours from './components/Tours';
import Loading from './components/Loading';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const[loading, setLoading] = useState(true);
const[tours, setTours] = useState([])


const removeTour = (id) =>{
  const filterTour = tours.filter((tour)=>tour.id  !== id)
 setTours(filterTour)
 
}

  const fetchTours = async() =>{
    setLoading(true)
    try {
      const response = await fetch('https://course-api.com/react-tours-project')
      const tours = await response.json()
      setLoading(false)
      setTours(tours);
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading){
    return (
      <main>
      <Loading/>
        </main>
    )
  }
 if (tours.length === 0){
   return <div className='tourLength'>
     <h2>No Tours Left</h2>
     <button onClick={() => fetchTours()}>Refresh</button>
   </div>
 }

 

  return (
    <div className="mainApp">
     <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
