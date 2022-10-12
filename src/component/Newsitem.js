import { getByTitle } from '@testing-library/react'
import React,  {Component}  from 'react'
// import { createContext } from 'react'
const Newsitem =(props)=> {
 
  
    let {title,description,imgUrl,fullnews,date}=props
    return (
      <div className=' container my-3'>
      <div className="card mm " style={{backgroundColor:"#212529"}} >
    <img className="card-img-top"  src={imgUrl} alt=""/>
      <div className="card-body">
      <div style={{color:'white'}}>
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={fullnews} target="__blank" className="btn btn-light">Read More</a>
        <h5 className="card-title">{new Date(date).toUTCString()}</h5>
        </div>
      </div>
    </div>
 </div>
    )
  
}
export default Newsitem;