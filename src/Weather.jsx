import React, { useState } from 'react';
import axios from "axios";
import "./App.css"
import WeatherCard from './WeatherCard';

const Weather = () => {

   const [speed, setSpeed] = useState("kph");
    const [tem, setTemp] = useState("Celcius");
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    console.log(speed);
    const apiKey = 'afd6c3c92c150de18b76fa1904f00441';
    const unit = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&units=${unit}&appid=${apiKey}`

    const getCityInfo = (e) => {
        e.preventDefault();
        axios.get(url).then((res)=>{
            console.log(res.data);
            setError(false)
            setData(res.data)
        }).catch(err=>{
            console.log(err.message)
            setCity("")
            setData(null)
            setError(true)
            setTimeout(()=>setError(false), 5000);
        })
    }
   
    const errorMessage = <p style={{color:'red'}}>Please enter valid City Name</p>

    return (
     <>
       <div className='container my-3'>
            
            <div className="input-group mb-3">
              <input placeholder='Enter City Name' style={{textAlign:'center', color:'black'}} class="form-control" name='city' value={city} onChange={(e)=>setCity(e.target.value)} />
              <div className="input-group mb-3">
              <select onChange={(e)=>setSpeed(e.target.value)} style={{marginTop:15, backgroundColor:'white'  ,color:'black', width:'100%'}} className="btn btn-outline-secondary" aria-label=".form-select-lg example">
              <option value="kph" >kph</option>
              <option value="mph" >mph</option>
              </select>
              </div>
              <div className="input-group mb-3">
              <select onChange={(e)=>setTemp(e.target.value)} style={{width:'100%', backgroundColor:'white', color:'black'}} className="btn btn-outline-secondary" aria-label=".form-select-lg example">
              <option value="celsius">Celsius</option>
              <option value="kalvin">Kelvin</option>
              <option value="fahrenheit">Fahrenheit</option>
              </select>
              </div>
              <div className="input-group mb-3">
              <button onClick={getCityInfo} style={{width:'100%', color:"white", backgroundColor:'#47cc6b'}} className="btn btn-outline-primary" >Get Data</button>
              </div>
            </div>
   
            {!error && data && <WeatherCard data={data} speed={speed} tem={tem} />}
            {error && errorMessage}
           
                    </div>
                   
     </>
    );
};



export default Weather;