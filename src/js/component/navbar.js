import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import {useNavigate, Navigate, useLocation} from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const [favoritos, setFavoritos] = useState([]); //Borrar si no funciona

  const navigate = useNavigate()


function handleLogout() {
	actions.logout()
	navigate("/login")
}

function handleSignup() {
	actions.signup()
	navigate("/signup")
}

// const HomeButton = () => {
//   return window.location.pathname === '/home' ? (
//     <button
//           type="button"
//           className="btn btn-info dropdown-toggle m-6"
//           data-bs-toggle="dropdown"
//           aria-expanded="false">
//           <b>Favorites</b>
//         </button>
//   ) : null;
// };

  return (
    <nav className="navbar navbar-light bg-black mb-3">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVTTo9JHVC4UBRz51V2RotMqaQNEl4eS-4A&usqp=CAU"
          alt=""
          className="m-4"
        />
      </Link>

      <div className="row-col-2 d-grid gap-2 d-md-flex right-content-md-end">

          <Link to= "/signup"><button className={"btn btn-info "} onClick={handleSignup}><b>Sign Up</b></button></Link>
        
          <Link to= "/login"><button className={"btn btn-info "+ store.view}><b>Login</b></button></Link>

          <button className={"btn btn-info "+ store.hidden} onClick={handleLogout}><b>Logout</b></button> 

          
          <button type="button" className="btn btn-info dropdown-toggle m-6" data-bs-toggle="dropdown" aria-expanded="false">
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
    </nav>
  );
};

// export default HomeButton;
