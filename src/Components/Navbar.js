import React, {useState} from 'react'
import '../my-proj1.css';
import './TextForm'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [mystyle1,setmystyle1]=useState({
    backgroundColor:'rgb(39, 35, 35)'  
  });
  const [mystyle2,setmystyle2]=useState({
    color:'rgb(234, 222, 222)'
  });
  const [mystyle3,setmystyle3]=useState({
    backgroundColor:'rgb(39, 35, 35)',
    color:'green'
  });
  const [mystyle5,setmystyle5]=useState({
    backgroundColor:'white',
    color:'black'
  });
  const [mystyle6,setmystyle6]=useState({
    backgroundColor:'white'
  });

  const mainfn=()=>{
    props.toogleMode();
    toggledark();
  }
 
  const toggledark=()=>{
   if(props.mode==='dark'){
    setmystyle1({
      backgroundColor:'green'
    })
    setmystyle2({
      color:'black'
    })
    setmystyle3({
      backgroundColor:"rgb(253, 107, 3)",
      color:"white"
    })
    setmystyle5({
      backgroundColor:'rgb(133, 133, 137)',
      color:'white'
    })
    setmystyle6({
      backgroundColor:'rgba(221, 221, 156, 0.922)'
    })
   }
   else{
    setmystyle1({
      backgroundColor:'rgb(39, 35, 35)'
    })
    setmystyle2({
      color:'rgb(234, 222, 222)'
    })
    setmystyle3({
    backgroundColor:"rgb(39, 35, 35)",
    color:'green'
    })
    setmystyle5({
      backgroundColor:'white',
      color:'black'
    })
    setmystyle6({
      backgroundColor:'white'
    })
   }
  }

  const hoverfn=()=>{
    if(props.mode==='light'){
    setmystyle3({
      backgroundColor:"red",
      color:"white"
    })
  }
  else{
    setmystyle3({
      backgroundColor:"green",
      color:"white"
    })
  }
  }
  
  const hoveroutfn=()=>{
    if(props.mode==='light'){
    setmystyle3({
      backgroundColor:"rgb(253, 107, 3)",
      color:"white"
    })
  }
  else{
    setmystyle3({
      backgroundColor:"rgb(39, 35, 35)",
      color:"white"
    })
  }
  }
  
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={mystyle1}>
    <div className="container-fluid">
      <Link style={mystyle2} className="navbar-brand" to="/"><b>TextUtils</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link style={mystyle2} className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={mystyle2} className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item dropdown">
            <Link style={mystyle2} className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={mystyle5}>
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link style={mystyle2} className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input style={mystyle6} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" style={mystyle3}  onMouseOver={hoverfn} onMouseLeave={hoveroutfn}>Search</button>
        </form>
        <label className="switch mx-3">
        <input type="checkbox" id="chkbox" onClick={mainfn}/>
        <span className="slider round"></span>
        </label>
      </div>
    </div>
   </nav>
  )
}
