import React, { Suspense, lazy } from "react";
import "./App.css";
// import Navbar from "./Componets/Navbar/Navbar";
// import Sidebar from "./Componets/Sidebar/Sidebar";
// import About from "./Componets/About/About";
// import RightSideBar from "./Componets/RightSideBar/RightSideBar";
// import Home from "./Home/Home";
const Navbar = React.lazy(() => import("./Componets/Navbar/Navbar"));
const Sidebar = React.lazy(() => import("./Componets/Sidebar/Sidebar"));
const About = React.lazy(() => import("./Componets/About/About"));
const RightSideBar = React.lazy(() =>
  import("./Componets/RightSideBar/RightSideBar")
);
const Home = React.lazy(() => import("./Home/Home"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loader">
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }
      >
        <Navbar />
        <div className="pages">
          <Sidebar />
          <Home />
          <RightSideBar />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
