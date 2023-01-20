import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";


const Card = (props) => {
  console.log(props);
  const {store, actions}=useContext(Context)
 
    return ( 
  <div className="container row" style={{maxWidth: "250px"}}>
    {/* https://starwars-visualguide.com/assets/img/characters/2.jpg */}
    <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" alt="..." style={{maxWidth: "300px"}}/>
    <div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to={"/single/"+props.id} className="btn btn-primary float-start">Learn more!</Link>
      <button className="btn btn-danger" onClick={()=>{actions.agregarFavoritos(props.nombre); console.log(props.nombre);}}>like</button>
    </div>
  </div>
    )
}

export default Card;