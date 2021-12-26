import React from 'react'
import cloud from './cloudy.png'
export default function Navbar(props) {
    return (
        <div >
            <nav style={{margin:0, padding:0, backgroundColor: "#d3f5ef"}} className="navbar navbar-expand-lg navbar-light bg-light">
             
  <div style={{backgroundColor: "#e4f0f0", height:'47px'}} className="container-fluid">
  <img style={{ marginLeft:'3%', height:'40px', width:'42px' }}  src={cloud} />
    <a  style={{color: "#f05e4a", marginLeft:'1%' }} className="navbar-brand" href="/"><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  style={{color: "white"}} className="nav-link active" aria-current="page" href="/"></a>
        </li>
      

      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}
