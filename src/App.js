import { useEffect, useState } from "react"

const App = () => {

  const [countries, setCountries] = useState(null)

  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const json = await response.json()
    setCountries(json)
    console.log(json)
  }
  // nie ma potrzeby wywoływać getData(),bo ona już jest callback 
  useEffect(() => getData, [])
  // Mapowanie w kontekście programowania, a zwłaszcza w React, polega na przekształcaniu każdego elementu w tablicy na inny element. W React jest to często używane do generowania listy elementów JSX na podstawie danych.
  return (
    <div>
      {countries?.map(country => <h3>{country.name.common}</h3>)}
    </div>
  )
}

export default App;
