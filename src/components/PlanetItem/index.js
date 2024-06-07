// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachSlide} = props

  return (
    <div className="slide">
      <h1 className="heading">PLANETS</h1>
      <img
        src={eachSlide.imageUrl}
        className="img"
        alt={`planet ${eachSlide.name}`}
      />
      <h3 className="planet-name">{eachSlide.name}</h3>
      <p className="description">{eachSlide.description}</p>
    </div>
  )
}

export default PlanetItem
