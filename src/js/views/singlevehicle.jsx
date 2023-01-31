import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Profile from "../component/profile.jsx"

export const Single = (props) => {
  const { store, actions } = useContext(Context); //nos hace disponible todo lo que está en store y en actions
  const params = useParams();
  // const [personajesInfo, setPersonajesInfo] = useState({})

  // console.log(useParams());

  // function obtenerCadaPersonaje (){
  //   fetch("https://www.swapi.tech/api/people/"+params.theid)
  //   .then(res=> res.json())
  //   .then((data) => setPersonajesInfo(data.result))
  // }

  useEffect (() => {
    actions.obtenerCadaVehiculo(params.theid);

  },[])
  
  

  return (
    <div className="jumbotron text-light">



      
    <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(params.theid)+".jpg"}alt="" />
      <p className="display-5">Model: {store.personajesInfo.properties?.model}</p>
      <p className="display-5">Name: {store.personajesInfo.properties?.name}</p>
      <p className="display-5">Passenger: {store.personajesInfo.properties?.passenger}</p>
      <p className="display-5">Class: {store.personajesInfo.properties?.vehicle_class}</p>


      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-light" href="#" role="button">
          Back home</span>
      </Link>
    </div>
  );
};

Singlevehicle.propTypes = {
  match: PropTypes.object,
};



