import '@fortawesome/fontawesome-free/js/all'
import { getIcon } from '../helperFunction'

const TodayDisplay = ({today, location}) => {
    return (
        <div className="today-container">
            <div className="info-container">
                <h1>Today's forecast</h1>
                {/* znaki ? to dlatrgo, że przez chyba pierwsze 2 razy lokalizacja jest "null", ale później to już leci */}
                <h3>For the location of lng {location?.longitude.toFixed(2)} and lat {location?.latitude.toFixed(2)}.</h3>
            </div>
            <div className="info-container">
                {/* wspaniały przykład użycia funkcji ! */}
                {/* by zapobiec domyślenmu wyswietlaniu się jednej i tej samej ikonki - najpierw sprawdzamy, czy dzisiejsza pogoda istnieje - istnieje, więc default icon raczej nam się nie pojawi :) */}
            {today?.weather && getIcon(today.weather)}
            {/* teź warto zerknąc do css jak svg jest powiększany za pomocą transform */}
            </div>
        </div>
    )
}

export default TodayDisplay