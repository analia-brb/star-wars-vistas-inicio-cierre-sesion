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
    actions.obtenerCadaPersonaje(params.theid);
  },[])
  
  

  return (
    <div className="jumbotron">
      <h1 className="display-4"> Detalles de personajes </h1>
      <p className="display-4"> Name: {store.personajesInfo.properties?.name}</p>
      <p className="display-4"> Birth Date: {store.personajesInfo.properties?.birth_year}</p>
      <p className="display-4"> Gender: {store.personajesInfo.properties?.gender}</p>
      <p className="display-4"> Height: {store.personajesInfo.properties?.height}</p>
      <p className="display-4"> Mass: {store.personajesInfo.properties?.mass}</p>
      <p className="display-4"> Skin-Color: {store.personajesInfo.properties?.skin_color}</p>
      <p className="display-4"> Eye-Color: {store.personajesInfo.properties?.eye_color}</p>
      <p className="display-4"> Hair-Color: {store.personajesInfo.properties?.hair_color}</p>


      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home{" "}
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};


