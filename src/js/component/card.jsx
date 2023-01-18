import React from "react";
import {Link} from "react-router-dom";


const Card = (props) => {
  console.log(props);
    return ( 
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to={"/single/"+props.id} class="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
    )
}

export default Card;