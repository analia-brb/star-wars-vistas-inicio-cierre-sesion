import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
// import { Demo } from "./views/demo";
import { Single } from "./views/single.jsx";
// import { Singlevehicle } from "./views/single.jsx";
import { Login } from "./views/login.jsx";
import { Signup} from "./views/signup.jsx";


// La exportación por default - no lleva llaves

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="container mx-auto d-block bg-black">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Signup />} />
            {/* <Route path="/demo" element={<Demo />} />{" "} */}
            <Route path="/single/:theid" element={<Single />} />{" "}
            {/* <Route path="/singleplanet/:theid" element={<Singleplanet />} />{" "} */}
            {/* <Route path="/singlevehicle/:theid" element={<Singlevehicle />} />{" "} */}
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
