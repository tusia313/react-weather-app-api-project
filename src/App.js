import TodayDisplay from './components/TodayDisplay'
import Card from './components/Card'
import UnitContainer from './components/UnitContainer'

const App = () => {

  return (
    <div className="weather-conatiner">
      <TodayDisplay/>
      <div className="cards-container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <UnitContainer/>
    </div>
  )
}

export default App;
