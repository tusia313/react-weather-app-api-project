import { convertUnit } from "../helperFunction"
const UnitContainer = () => {
    return(
        <div className="units-container">
            <button id="celcius">°C</button>
            <button id="fahrenheit">°F</button>
            <button id="kelvin">K</button>
        </div>
    )
}

export default UnitContainer