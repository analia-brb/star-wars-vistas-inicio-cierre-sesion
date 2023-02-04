import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

const Formsignup = () => {

  const [email, setEmail] = useState("");
  const[name,setName]= useState("")
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  function enviarForm(e) {
    e.preventDefault();
    actions.signup(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <>
      {store.auth === true ? (
        <Navigate to="/login" />
      ) : (
        <form className="w-50 mx-auto" onSubmit={enviarForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-info">
            <b>Sign Up</b>
          </button>
        </form>
      )}
    </>
  );
};

export default Formsignup;
