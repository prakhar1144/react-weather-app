import './App.css';
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

  const submit = (e) => {
    e.preventDefault()
    const cityInput = e.target.elements.city.value
    // console.log(cityInput)
    setCity(cityInput)
  }

  const areeee = City;
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ areeee +'&appid=ec1bf9f7316c92cc76873f61127a1d0a')
    .then(response => response.json())
    .then(data => {
      setTemp(data.main.temp)
      setMax(data.main.temp_max)
      setMin(data.main.temp_min)
      setText(data.weather[0].description)
      console.log(data)});
  },[City])

  return (
    <div className="App">
      <Form submit={submit}/>
      <Weather 
        city={City}
        temp={temp}
        max={max}
        min={min}
        text={text}
      />
    </div>
  );
}

export default App;
