import { useNavigate } from 'react-router-dom'


function RenderItem({item}) {
  const navigate = useNavigate()
  function goToItem() {
    navigate('./details/'+item.id)
  }

  return (
    <tr onClick={goToItem}>
        <td> <img className='list-page-image' src={item.image} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.category}</td>
        <td colSpan='2'>{item.description}</td>
        <td>{item.price} EUR</td>
    </tr>
  )
}

export default RenderItem