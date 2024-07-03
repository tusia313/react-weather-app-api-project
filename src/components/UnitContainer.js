
const UnitContainer = ({handleClick}) => {
    return(
        <div className="units-container">
            <button id="celcius" onClick = {handleClick}>°C</button>
            <button id="fahrenheit" onClick = {handleClick}>°F</button>
            <button id="kelvin" onClick = {handleClick}>K</button>
        </div>
    )
}

export default UnitContainer