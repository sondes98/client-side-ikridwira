import React from 'react'
import "./containers.css"
import HouseCardList from '../components/houseCard/HouseCardList'

export const AppartementSection = () => {
  return (

    <div>
      <div className="section2 " >
        <h1 className='sect-title'> CHOOSE YOUR Appartement </h1>
      </div>
      <HouseCardList />
    </div>
  )
}
