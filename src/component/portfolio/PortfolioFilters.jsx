import React, { useState } from 'react'
import { items } from './items'
import { button, div, filter } from 'motion/react-client'

function PortfolioFilters() {
    const [selectedFilters,setSelectedFilters] = useState()
    const [filterItems,setFilterItems] = useState((items))
    console.log(items,'items',)
    let filters = ['Technology','Help Desk','Analysis','Marketing']
  return (
    <>
    <div className="btn-container">
        {filters.map((category,index)=>(
            <button
            onClick={()=>handleFilterBtnclick(category)}
            className={`button ${selectedFilters?.includes(category) ?'active':''}`}
            key={`filters-${index}`}
            >{category}</button>
        ))}


    </div>

    <div className="item-container">
        {filterItems.map((item,index)=>(
            <div key={`item-${index}`} className='item'>
                <img src={item.url} alt="" />
                <h2>{item.name}</h2>
                <p>{item.category}</p>
            </div>
        ))}

    </div>
   
    </>
 
  )
}

export default PortfolioFilters
