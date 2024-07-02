import { getIcon } from '../helperFunction'

const Card = ({day}) => {
    // console.log(day)
    return(
        <div className = "card-container">
            <p className = "icon-container">{getIcon(day.weather)}</p>
            <p>{day.date}</p>
            <p>{day.weather}</p>
            <p>{day.temp2m.min} min</p>
            <p>{day.temp2m.max} max</p>
        </div>
    )
    console.log(day)
}
export default Card