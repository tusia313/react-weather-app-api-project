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
    fetch(`http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`)
      .then(response => response.json())
      // tutaj zapisujemy ten obiekt! w setData
      .then(json => setData(json))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getLocation()
      fetchData()
  }, [])

  return (
    <div className="weather-app">
      <TodayDisplay today = {data?.dataseries[0]} location = {location} />
      <div className="cards-container">
        {/* jak chcemy ograniczyć ilośc danych pobieranych to możemy użyc .slice(0,9) chocby */}
        {/* .map() jako że chcemu utowrzyć NOWY łańcuch/nowe dane */}
       {data?.dataseries.map((dataserie, index) => {
        // index jest nam potrzebny do nazw dni tygodnia!
        return <Card key = {index} day = {dataserie} index = {index}/>
       })}
      </div>
      <UnitContainer />
      {errorMessage}
    </div>
  )
}

export default App;
