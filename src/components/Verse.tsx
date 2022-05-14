import React, { useEffect, useState } from 'react'
import '../styles/VerseMod.scss'

const Verse = () => {

  const [verse, setVerse] = useState("Placeholder")

  // useEffect

  return (
    <div id='center'>
        <h2>{verse}</h2>
        <p>damn</p>
    </div>
  )
}

export default Verse