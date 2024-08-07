import { useEffect, useState } from 'react'
import TodayDisplay from './components/TodayDisplay'
import Card from './components/Card'
import UnitContainer from './components/UnitContainer'

const App = () => {

  const [location, setLocation] = useState(null)
  const [errorMessage, setError] = useState(null)
  const [data, setData] = useState(null)
  const [unit, setUnit] = useState('celcius')

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
    // uwaga, jeszcze na końcu api jest zmiana outputu na json zamiast xml
    fetch(`http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`)
      .then(response => response.json())
      // tutaj zapisujemy daną lokalizajcę w setData !
      .then(json => setData(json))
      .catch(err => console.error(err))
  }
  const handleClick = (e) => {
    setUnit(e.target.id)
  }
  console.log(unit)

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
        // index jest nam potrzebny do nazwy dnia "TODAY", key jest tylko po to, by w przeglądarce nie było błędu
        return <Card key = {index} day = {dataserie} index = {index} unit= {unit}/>
       })}
      </div>
      <UnitContainer handleClick={handleClick} unit={unit} />
      {errorMessage}
    </div>
  )
}

export default App;
