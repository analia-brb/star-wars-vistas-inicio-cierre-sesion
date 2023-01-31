import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const [favoritos, setFavoritos] = useState([]); //Borrar si no funciona

  return (
    <nav className="navbar navbar-light bg-black mb-3">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVTTo9JHVC4UBRz51V2RotMqaQNEl4eS-4A&usqp=CAU"
          alt=""
          className="m-4"
        />
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-info dropdown-toggle m-4"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <b>Favorites</b>
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            {store.favoritos?.map((item, index) => (
              <li key={index}>{item}<button className="fas fa-trash-alt align-items-end "
              onClick={() =>
                actions.eliminarFavorito(item)
              }
            ></button></li>
            ))}{" "}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
