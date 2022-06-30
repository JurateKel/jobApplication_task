function RenderDetailPageItem({item}) {
  
  return (
    <div className="card p-2 single-item" style={{width: '400px'}}>
        <img className="card-img-top detail-page-image" src={item[0].image} alt="" />
        <div className="card-body">
          <h4>{item[0].title}</h4>
          <h5>{item[0].category}</h5>
          <p>{item[0].description}</p>
          <h4>{item[0].price} EUR</h4>
          <div><span>{item[0].rating.rate} ⭐ </span>Total reviews: {item[0].rating.count}<span></span></div>
        </div>
    </div>
  )
}

export default RenderDetailPageItem