import { getIcon } from '../helperFunction'

const Card = ({ day, index }) => {
    // zamieniami na ciąg liter
    const date = day.date.toString()
    const year = date.slice(0, 4)
    const month = date.slice(4, 6)
    const currentDay = date.slice(6, 8)
    // musimy to z powrotem zamienić na string, ale taki ładny (thx to Date string, inaczej będziemy mieć bardzo skomplikowane formatowanie daty, czas wschodnioeuropejski itp)
    const formattedDate = new Date(year, month - 1, currentDay).toDateString().slice(0, 3)
    return (
        <div className="card-container">
            <h3>{index === 0 ? 'Today' : formattedDate}</h3>
            <p className="icon-container">{getIcon(day.weather)}</p>
            <p>{day.weather}</p>
            <p>{day.temp2m.min} min</p>
            <p>{day.temp2m.max} max</p>
        </div>
    )
}
export default Card