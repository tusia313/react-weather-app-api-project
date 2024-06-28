import { useEffect, useState } from 'react'
import TodayDisplay from './components/TodayDisplay'
import Card from './components/Card'
import UnitContainer from './components/UnitContainer'

const App = () => {

  const [location, setLocation] = useState(null)
  const [errorMessage, setError] = useState(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Location API is not supported by Your browser.')
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation(position.coords)
      },
        // okej, to jest super ciekawy motyw, nie spotkałam się z czymś takim jeszcze
        () => {
          setError('Sorry, we cannot find Your location.')
        }
      )
    }
  }

  const fetchData = () => {
    const longitude = location?.longitude
    const latitude = location?.latitude
    fetch(`http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=astro&output=xml`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.error(err))
  }
  useEffect(() => {
    getLocation()
      fetchData()
  }, [])

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
      {errorMessage}
    </div>
  )
}

export default App;
