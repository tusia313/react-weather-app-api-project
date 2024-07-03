
const UnitContainer = ({handleClick, unit}) => {
    return(
        <div className="units-container">
            <button className ={unit === "celcius" ? null : "grayed"} id="celcius" onClick = {handleClick}>°C</button>
            <button className ={unit === "fahrenheit" ? null : "grayed"} id="fahrenheit" onClick = {handleClick}>°F</button>
            <button className ={unit === "kelvin" ? null : "grayed"} id="kelvin" onClick = {handleClick}>K</button>
        </div>
    )
}

export default UnitContainer