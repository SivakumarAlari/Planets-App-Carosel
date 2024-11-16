import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  console.log(name)
  return (
    <li className="each-image-container">
      <div className="image-container">
        <img src={imageUrl} alt={`planet ${name}`} className="planetImage" />
      </div>
      <h1 className="planet-name">{name} </h1>
      <p className="descriptionAboutPlanet">{description} </p>
    </li>
  )
}

export default PlanetItem
