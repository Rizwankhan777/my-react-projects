import React from 'react'
import { useState } from 'react';

const Tour = ({id,image,name,info,price,removeTour}) => {
    const[readMore,setReadMore] = useState(false);
  return (
    <div className='mainTour'>
        <div className="imgDiv">
            <img src={image} alt="" />
        </div>
       <div className="tourInfo">
       <h4>{name}</h4>
        <h6> ${price}</h6>
       </div>
       <p>{readMore ? info : `${info.substring(0,200)}...`}
        <button className='readBtn' onClick={()=>setReadMore(!readMore)}>
            {readMore ? 'show less' : 'Read More'}
        </button>
       </p>
       <button className='filterButton' onClick={() =>removeTour(id)}>Not Interested</button>
      
    </div>
  )
}

export default Tour
