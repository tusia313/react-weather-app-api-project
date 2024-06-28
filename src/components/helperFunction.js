const getIcon = (weatherType) => {
    let weatherIcon
    switch (weatherType) {
        case 'lightrainyday':
            weatherIcon = <i className="fas fa-cloud-rain"></i >
            break
        default:
            weatherIcon = <i className="fas fa-sun"></i>
    }
    return weatherIcon
}