const getIcon = (weatherType) => {
    let weatherIcon
    switch (weatherType) {
        case 'lightrainyday':
            weatherIcon = <i className="fas fa-cloud-rain"></i >
            break
        case 'clear':
            weatherIcon = <i className="fas fa-sun"></i>
            break
        case 'cloudy':
            weatherIcon = <i className="fas fa-cloud"></i>
            break
        case 'cloud':
            weatherIcon = <i className="fas fa-rain"></i>
            break
        case 'snow':
            weatherIcon = <i className="fas fa-snowflake"></i>
            break
        case 'ts':
            weatherIcon = <i className="fas fa-bolt"></i>
            break
        case 'lightrain':
            weatherIcon = <i className="fas fa-cloud-rain"></i>
            break
        case 'rain':
            weatherIcon = <i className="fas fa-droplet"></i>
            break
        default:
            weatherIcon = <i className="fas fa-sun"></i>
    }
    return weatherIcon
}

const convertToFahrenhait = (celcius) => {
    return (celcius * 9/5 + 32)
}

const convertToKelvin = (celcius) => {
    return (celcius + 273.15)
}

const convertUnit = (unit, currentTemp) => {
    let temp
    switch (unit) {
        case 'celcius':
            temp = currentTemp
            break
        case 'fahrenheit':
            // ważne jednostki w nawiasach - zamieniamy coś na coś
            temp = convertToFahrenhait(currentTemp)
            break
        case 'kelvin':
            temp = convertToKelvin(currentTemp)
            break
    } 
    console.log(temp)
    return temp
}
// bo eksportujemy wiele rzeczy => "eksport nazwany" jest bardziej przejrzysty, gdy z modułu eksportowanych jest wiele rzeczy.
// Eksport domyślny jest użyteczny, gdy moduł eksportuje jedną główną funkcję lub klasę.
export { getIcon, convertUnit }