import { useRef } from 'react'

function NewRecord() {

  const title = useRef()
  const price = useRef()
  const description = useRef()
  const category = useRef()
  const image = useRef()
  
  function renderNewItem(e){
    e.preventDefault()
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: title.current.value,
                    price: price.current.value,
                    description: description.current.value,
                    image: image.current.value,
                    category: category.current.value
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

  }
  return (
    <div>
      <form className='new-record'>
        <input className='form-control' ref={title} type="text" name="title" id="title" placeholder='Product title'/>
        <input className='form-control' ref={price} type="number" placeholder='Product price'/>
        <textarea className='form-control' ref={description} name="description" id="" cols="30" rows="10" placeholder='Product description'/>
        <input className='form-control' ref={category} type="category" name="category" id="category" placeholder='Product category'/>
        <input className='form-control' ref={image} type="url" placeholder='Product photo url'/>
        <button type='button' className='btn btn-light' onClick={renderNewItem}>Submit</button>
      </form>
    </div>
  )
}

export default NewRecord