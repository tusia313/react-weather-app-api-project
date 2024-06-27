import { useState } from 'react'
import TodayDisplay from './components/TodayDisplay'
import Card from './components/Card'
import UnitContainer from './components/UnitContainer'

const App = () => {

  const [position, setPosition] = useState(null)
  const [error, setError] = useState(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Location API is not supported by Your browser.')
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        setPosition(position.coords)
      },
      // okej, to jest super ciekawy motyw, nie spotkałam się z czymś takim jeszcze
        () => {
          setError('Sorry, we cannot find Your location.')
        }
      )
    }
  }

  getLocation()

  // const fetchData = () => {

  // }

  return (
    <div className="weather-app">
      <TodayDisplay />
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <UnitContainer />
      {error}
    </div>
  )
}

export default App;
