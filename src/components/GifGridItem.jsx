
const GifGridItem = ({ id, title, url }) => {
  
  return (
    <>
      <div className="card">
        <img src={ url } alt={ title } className="card__image"/>
        <p className="card__paragraph">{ title }</p>
      </div>
    </>
  )
}

export default GifGridItem;