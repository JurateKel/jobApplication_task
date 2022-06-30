import RenderTableItem from './RenderTableItem'

function ListPage({currentItems}) {

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col'>Title</th>
            <th scope='col'>Category</th>
            <th colspan='2' scope='col'>Description</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
            {currentItems ? currentItems.map(item=> <RenderTableItem item={item} key={item.id}/>) : <tr><td>Loading</td></tr>}
        </tbody>
      </table>

    </div>
  )
}

export default ListPage