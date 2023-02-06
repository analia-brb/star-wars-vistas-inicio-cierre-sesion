import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import Card from "../component/card.jsx";
import {Context} from "../store/appContext.js"

const MyView = () => (
  <div>
    <h1>Mi vista</h1>
    <MyButton />
  </div>
);



export const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const {store}=useContext(Context)
  // console.log(store.demo);
  console.log(store.personajes);

  // function obtenerInfoPersonajes() {
  //   fetch(" https://www.swapi.tech/api/people")
  //     .then((res) => res.json())
  //     .then((data) => setPersonajes(data.results))
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   obtenerInfoPersonajes();
  // }, []);
  // console.log(personajes);

  return (
    
      <div className="container d-flex row ms-5">
        {store.personajes.map((item) => (
          <Card nombre={item.name} key={item.uid} id={item.uid} />
          // Le mando nombre y uid y lo coloca en el componente Card
        ))}
      </div>
    
  );
};

export default MyView;