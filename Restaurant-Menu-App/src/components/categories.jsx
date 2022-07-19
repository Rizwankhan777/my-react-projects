import React from 'react'

const Categories = ({filterItems, categories}) => {
  return (
<div className='container'>
    <div className="row">
        <div className="col-md-8 mx-auto">
        <div className='category-tabs'>
        {
            categories.map((category,index) =>{
                return (

                    <button className='filterItems' onClick={() => filterItems(category)}>{category}</button>
                )
                
            })
        }
    </div>
        </div>
    </div>
</div>

  )
}

export default Categories