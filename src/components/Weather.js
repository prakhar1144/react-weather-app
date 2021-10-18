import "weather-icons/css/weather-icons.css"

const Weather = (props) => {
    return (
    <div className="container">
        <div className="cards">
            <h1>{props.city}</h1>
            <h5 className="py-4">
                <i className="wi wi-day-sunny display-1"></i>
            </h5>
            <h1 className="py-2">{props.temp}&deg;</h1>
            {maxmin(props.max, props.min)}
            <h3 className="py-3">{props.text}</h3>
        </div>
     </div>
    );
}

const maxmin = (max, min) => {
    return (
        <div>
            <span className="px-4">
                {max}&deg;
            </span>
            <span className="px-4">
                {min}&deg;
            </span>
            
        </div>
    )
}

export default Weather;