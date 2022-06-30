import { useParams } from 'react-router-dom'
import RenderDetailPageItem from '../../components/RenderDetailPageItem'
import mainContext from '../../context/mainContext'
import { useContext } from 'react'

function DetailsPage() {
  const itemId = useParams()
  const {getItems} = useContext(mainContext)
  const item = getItems.filter(item => item.id === Number(itemId.itemId))


  return (
    <div>
      {item ? <RenderDetailPageItem item={item}/> : <h4>Loading</h4>}
    </div>
  )
}

export default DetailsPage