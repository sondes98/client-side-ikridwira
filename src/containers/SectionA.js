import React from 'react'
import { AppartementCard } from '../components/appartementCart/AppartementCard'

export const SectionA = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evently" , padding:"100px"}}>
        <AppartementCard/>
        <AppartementCard/>
        <AppartementCard/>
    </div>
  )
}
