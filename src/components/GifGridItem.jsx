
const GifGridItem = ({ id, title, url }) => {
  
  return (
    <>
      <div className="card animate__animated animate__fadeIn">
        <img src={ url } alt={ title } className="card__image"/>
        <p className="card__paragraph">{ title }</p>
      </div>
    </>
  )
}

export default GifGridItem;