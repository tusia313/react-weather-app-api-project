import { useEffect, useState } from 'react'
import TodayDisplay from './components/TodayDisplay'
import Card from './components/Card'
import UnitContainer from './components/UnitContainer'

const App = () => {

  const [location, setLocation] = useState(null)
  const [errorMessage, setError] = useState(null)
  const [data, setData] = useState(null)

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
    fetch(`http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civil&output=json`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
  }
  // console.log(data)
  useEffect(() => {
    getLocation()
      fetchData()
  }, [])

  return (
    <div className="weather-app">
      <TodayDisplay today = {data?.dataseries[0]} location = {location} />
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
