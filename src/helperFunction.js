const getIcon = (weatherType) => {
    let weatherIcon
    switch (weatherType) {
        case 'lightrainyday':
            weatherIcon = <i className="fas fa-cloud-rain"></i >
            break
        case 'clear':
            weatherIcon = <i className="fas fa-sun"></i>
            break
        case 'mcloudy':
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
        default:
            weatherIcon = <i className="fas fa-sun"></i>
    }
    return weatherIcon
}
// bo eksportujemy wiele rzeczy => "eksport nazwany" jest bardziej przejrzysty, gdy z modułu eksportowanych jest wiele rzeczy.
// Eksport domyślny jest użyteczny, gdy moduł eksportuje jedną główną funkcję lub klasę.
export { getIcon }