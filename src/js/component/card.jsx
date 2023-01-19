import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";


const Card = (props) => {
  console.log(props);
  const {store}=useContext(Context)
 
    return ( 
  <div className="card">
    {/* https://starwars-visualguide.com/assets/img/characters/2.jpg */}
    <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" alt="..." style={{maxWidth: "540px"}}/>
    <div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to={"/single/"+props.id} className="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
    )
}

export default Card;