import { useEffect } from "react"

const App = () => {

  const getData = async() => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    console.log(await response.json())
  }
  // nie ma potrzeby wywoływać getData(),bo ona już jest callback 
  useEffect(() => getData, [])

  return (
    <div>
    </div>
  )
}

export default App;
