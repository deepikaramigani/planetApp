// Write your code here
import Sliders from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Sliders {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} eachSlide={each} />
        ))}
      </Sliders>
    </div>
  )
}

export default PlanetsSlider
