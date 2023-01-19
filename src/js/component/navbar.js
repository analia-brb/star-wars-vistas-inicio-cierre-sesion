import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {

const { store, actions } = useContext(Context);


const [favoritos, setFavoritos] = useState([]);//Borrar si no funciona


  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">


          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">


            Favorites


          </button>
		  
          <ul className="dropdown-menu dropdown-menu-end">
		  {store.favoritos?.map((item, index) =>
		  <li key={index}>{item}</li>)} <i className="fas fa-trash-alt align-items-end "
		  onClick={
			  () => setStore(store.favoritos.filter((currentIndex) => index != currentIndex))
	  }></i>
		            </ul>
	
		 



							
        </div>
      </div>
    </nav>
  );
};
