import React, { useEffect, useState } from 'react'
import '../styles/VerseMod.scss'

const rand = () => {
  return Math.floor((Math.random() * 6236) + 1)
}

const splitWords = (sentence: string) => {
  let n = sentence.split(' ')
  let count = 0
  let str = ""
  for (let i of n) {
    if (count === 12) {
      str += '\n'
      count = 0
    }
    str += ' ' + i
    count++
  }
  return str
}

const Verse = () => {

  const [verse, setVerse] = useState("place")
  const [verseAuth, setVerseAuth] = useState("place")

  useEffect(() => {
    const verseNum = rand()
    const url = `http://api.alquran.cloud/v1/ayah/${verseNum}/editions/quran-uthmani,en.asad,en.pickthall`
    const data = fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      let m = splitWords(data['data'][1]['text'])
      console.log(splitWords(data['data'][1]['text']))
      setVerse(m)

      const auth = data['data'][0]['surah']['englishName']
      const num1 = data['data'][0]['surah']['number']
      const num2 = data['data'][0]['numberInSurah']

      setVerseAuth(`${auth}: ${num1}:${num2}`)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])

  return (
    <div id='center'>
        <h3>{verse}</h3>
        <p>{verseAuth}</p>
    </div>
  )
}

export default Verse