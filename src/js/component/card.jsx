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
      <h5 className="card-title text-info">{props.nombre}</h5>
      <Link to={"/single/"+props.id} className="btn btn-light float-start mx-3"><b>Learn more!</b></Link>
      <button className="btn btn-black" onClick={()=>{actions.agregarFavoritos(props.nombre); console.log(props.nombre);}}><i className="fa fa-heart text-danger"></i></button>
    </div>
  </div>
    )
}

export default Card;