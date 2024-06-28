import '@fortawesome/fontawesome-free/js/all'
import { getIcon } from '../helperFunction'

const TodayDisplay = ({today, location}) => {
    console.log(today)
    return (
        <div className="today-container">
            <div className="info-container">
                <h1>Today's forecast</h1>
                <h3>For the location of lng {location?.longitude} and lat {location?.latitude}.</h3>
            </div>
            <div className="info-container">
            {getIcon(today?.weather)}
            </div>
        </div>
    )
}

export default TodayDisplay