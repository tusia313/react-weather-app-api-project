import { getIcon, convertUnit } from '../helperFunction'

const Card = ({ day, index, unit }) => {
    // zamieniami na ciąg liter
    const date = day.date.toString()
    const year = date.slice(0, 4)
    const month = date.slice(4, 6)
    const currentDay = date.slice(6, 8)
    // musimy to z powrotem zamienić na string, ale taki ładny (thx to Date string, inaczej będziemy mieć bardzo skomplikowane formatowanie daty, czas wschodnioeuropejski itp)
    const formattedDate = new Date(year, month - 1, currentDay).toDateString().slice(0, 3)
    const unitShorthand = unit === 'kelvin' ? unit.slice(0, 1).toUpperCase() : '°' + unit.slice(0, 1).toUpperCase()
    return (
        <div className="card-container">
            <h3>{index === 0 ? 'Today' : formattedDate}</h3>
            <p className="icon-container">{getIcon(day.weather)}</p>
            <p>{day.weather}</p>
            {/* BARDZO ważne! Jak zaimplementować funkcje z jednostkami - trzeba takze utowrzyc zmienną 'unit' - pozniej trzeb abędzie to zmienić za pomocą useState() */}
            <p>{convertUnit(unit, day.temp2m.min)} {unitShorthand} (min)</p>
            <p>{convertUnit(unit, day.temp2m.max)} {unitShorthand} (max)</p>
        </div>
    )
}
export default Card