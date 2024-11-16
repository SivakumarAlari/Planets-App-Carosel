import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      slidersToShow: 1,
      slidersToScroll: 1,
      dots: false,
    }
    return (
      <div className="main-container">
        <div className="slider-container" data-testid="planets">
          <h1 className="planet-heading">PLANETS </h1>
          <Slider {...settings}>
            {planetsList.map(eachPlanet => (
              <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider
