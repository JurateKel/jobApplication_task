import React from 'react'
import { useRef, useContext } from 'react'
import mainContext from '../context/mainContext'

function FilterTableItems({ setItems }) {
    const title = useRef()
    const category = useRef()
    const description = useRef()
    const { getItems } = useContext(mainContext)
    let filteredItems = getItems
    
    function filter(){
        if ( title.current.value.length > 0) {
            filteredItems = filteredItems.filter(item=>item.title.toLowerCase().includes(title.current.value.toLowerCase()))
            console.log('title')
            console.log(filteredItems)
            
        }
        if ( category.current.value.length > 0) {
            filteredItems = filteredItems.filter(item=>item.category.toLowerCase().includes(category.current.value.toLowerCase()))
            console.log('category')
            console.log(filteredItems)

        }
        if ( description.current.value.length > 0) {
            filteredItems = filteredItems.filter(item=>item.description.toLowerCase().includes(description.current.value.toLowerCase()))
            console.log('description')
            console.log(filteredItems)

        } 
        setItems(filteredItems.length === 0 ? [false] : filteredItems)

        if (title.current.value.length === 0 && category.current.value.length === 0 && description.current.value.length === 0 ) {
            setItems([])
        }
    }

  return (
    <div className='filter-bar col-8'>
        <input className='form-control m-1' ref={title} type="text" placeholder='Filter title' />
        <input className='form-control m-1' ref={category} type="text" placeholder='Filter category' />
        <input className='form-control m-1' ref={description} type="text" placeholder='Filter description' />
        <button onClick={filter} type="button" className="btn btn-light col-2 m-1">Filter</button>
    </div>
  )
}

export default FilterTableItems