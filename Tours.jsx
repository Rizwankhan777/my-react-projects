import React from 'react'
import Tour from './Tour'
const Tours = ({tours,removeTour}) => {
  return (
    <div>
        <h1 className='mainheading'> Our Tours</h1>
   {
       tours.map((tour) =>{
           return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
       })
   }
    </div>
  )
}

export default Tours