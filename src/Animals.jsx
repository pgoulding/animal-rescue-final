import React from 'react'
import { connect } from 'react-redux'
import './animals.scss'
const Animals = ({animals}) => {
  
  const animalCards =() =>  {
    return animals.map(animal => {
      return (
        <section>
          <img src={animal.img} alt={animal.species}/>
          <h3>{animal.name}</h3>
          <p className="species">{animal.species}</p>
          <p className="animal-description">{animal.description}</p>
        </section>
      )
    })
  }

  return (
    <div className="container">
      {animalCards()}
    </div>
  )
}

const mapStateToProps = ({animals}) => ({
  animals
})

export default connect(mapStateToProps)(Animals)
