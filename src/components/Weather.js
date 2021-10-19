import "weather-icons/css/weather-icons.css"

const Weather = (props) => {
    const icons = {
        2:'wi-thunderstorm',
        3:'wi-sprinkle',
        5:'wi-rain',
        6:'wi-snow',
        7:'wi-smoke',
        8:'wi-cloudy',
    }
    return (
    <div className="container py-md-5">
        <h1 className="text-center">{props.city}</h1>
        <h5 className="py-4 text-center">
            <i className={`wi display-1 ${icons[props.icon]}`}></i>
        </h5>
        <h1 className="py-2 text-center">{props.temp}&deg;</h1>
        {maxmin(props.max, props.min)}
        <h3 className="py-3 text-center">{props.text}</h3>
    </div>
    );
}

const maxmin = (max, min) => {
    return (
        <div className="text-center py-md-4">
            <span className="px-4">
                Max : {max}&deg;
            </span>
            <span className="px-4">
                Min : {min}&deg;
            </span>
        </div>
    )
}

export default Weather;