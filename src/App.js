import {useState, useEffect} from 'react'
import Weather from './components/Weather';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './components/Form';

// API_KEY = "ec1bf9f7316c92cc76873f61127a1d0a"

function App() {

  const [City, setCity] = useState("Delhi")
  const [temp, setTemp] = useState(undefined)
  const [max, setMax] = useState(undefined)
  const [min, setMin] = useState(undefined)
  const [text, setText] = useState(undefined)
  const [icon, setIcon] = useState(undefined)

  const submit = (e) => {
    e.preventDefault()
    const cityInput = e.target.elements.city.value
    // console.log(cityInput)
    if (cityInput==='') {alert("Enter City Name"); return;}
    setCity(cityInput)
  }

  const cityName = City;
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&units=metric&appid=ec1bf9f7316c92cc76873f61127a1d0a')
    .then((response) => { 
      if(!response.ok) {throw Error("Invalid City Name")}
      return response.json()
    })
    .then((data) => {
      setTemp(data.main.temp)
      setMax(data.main.temp_max)
      setMin(data.main.temp_min)
      setText(data.weather[0].description)
      setIcon(Math.floor(data.weather[0].id/100))
    })
    .catch((error)=>{
      alert(error);
      setCity("Delhi")
    });
  },[City])

  return (
    <div className="container app">
      <Form submit={submit}/>
      <Weather 
        city={City}
        temp={temp}
        max={max}
        min={min}
        text={text}
        icon={icon}
      />
    </div>
  );
}

export default App;
