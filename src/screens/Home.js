import React from 'react'
import CarmaForm from '../components/CarmaForm'

const Home = (props) => {
  return (
    <div>
      <div className="container">
        <CarmaForm setStep={props.setStep}/>
      </div>
    </div>
  )
}

export default Home