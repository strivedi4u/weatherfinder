import React from 'react'

export default function WeatherCard(props) {
    const weather = props.data.weather[0].description;
    let temp = Math.floor(props.data.main.temp);
    let feelsLike = Math.floor(props.data.main.feels_like)
    var windSpeed = Math.floor(props.data.wind.speed)
    const speed = props.speed;
    const tem = props.tem; 
    if(speed === "mph"){
        windSpeed = windSpeed*0.621;
    }
    if(tem ==="fahrenheit"){
temp = (temp*9/5)+32;
temp = Math.floor(temp);
feelsLike = (feelsLike*9/5)+32;
feelsLike = Math.floor(feelsLike);
    }
    if(tem ==="kalvin"){
        temp = 273+temp;
        feelsLike = 273+feelsLike;
     }
    return (
        <div>
            <div className="card text-center">
  <div className="card-header">
  {props.data.name}
  </div>
  <div className="card-body">
    <h5 className="card-title">The Weather is {weather}</h5>
    <p className="card-text">The Temp is {temp} {tem}  </p>
    <p className="card-text">The Wind Speed is {windSpeed} {speed}</p>
    <p className="card-text">It feels like {feelsLike} {tem}</p>
    <a href="/" style={{backgroundColor:"tomato"}} className="btn btn-primary">Delete</a>
  </div>
  <div className="card-footer text-muted">
Developed by Shashank
  </div>
</div>
        </div>
    )
}
