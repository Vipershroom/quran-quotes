import React, { useEffect, useState } from 'react'
import '../styles/VerseMod.scss'

const Verse = () => {

  const [verse, setverse] = useState("Placeholder")

  // useEffect

  return (
    <div id='center'>
        {verse}
    </div>
  )
}

export default Verse