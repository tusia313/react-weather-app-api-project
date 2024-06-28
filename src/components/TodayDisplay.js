const TodayDisplay = ({today, location}) => {
    console.log('TODAY DISTAPLAY', today, location)
    return (
        <div className="today-container">
            <div className="info-container">
                <h1>Today's forecast</h1>
                <h3>For the location of lng xxx and lat xxx.</h3>
            </div>
            <div className="info-container">
                icon :)
            </div>
        </div>
    )
}

export default TodayDisplay