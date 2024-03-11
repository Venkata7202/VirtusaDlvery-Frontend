import React, { useState } from "react";
import "../assets/css/common.css";
import "../assets/css/dashboard.css";
import Header from "../components/ui-components/Header";
import HeaderLite from "../components/ui-components/HeaderLite";
import SideBar from "./ui-components/SideBar";
import ProductManagement from "./sub-components/ProductManagement";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function Dashboard() {
  const [currentSubModule, setCurrentSubModule] = React.useState({});

  const changeCurrentSubModule = (submodule) => {
    console.log("current submodule", submodule);
    setCurrentSubModule(submodule);
  };
  return (
    <div>
      <div>
        <Header />
        <HeaderLite />
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <SideBar changeCurrentSubModule={changeCurrentSubModule} />
          </div>
          <div className="col-span-9 row-span-1">
            {/* <Routes> */}
            {/* <Route path="/" exact element={<Dashboard />} /> */}
            {/* <Route path="/dashboard" exact element={<Dashboard />} /> */}
            {/* <Route
                path="dashboard/inventory/product-management"
                exact
                element={<ProductManagement />}
              />
            </Routes> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
