import { useState } from "react";
import "../../assets/css/sidebar.css";
// import Module from "./Module";
// import Logo from "./Logo";
import { Link } from "react-router-dom";

function SidebBar({ changeCurrentSubModule }) {
  const modulesInitValues = [
    {
      name: "Inventory",
      icon: "inventory",
      link: "inventory",
      submodules: [
        {
          name: "Product Management",
          icon: "product",
          link: "inventory/product-management",
          active: true,
        },
        {
          name: "Product Category",
          icon: "product-category",
          link: "inventory/product-category",
          active: false,
        },
        {
          name: "Inventory Statistics",
          icon: "inventory-statistics",
          link: "inventory/inventory-statistics",
          active: false,
        },
        {
          name: "Inventory Scanning",
          icon: "inventory-scanning",
          link: "inventory/inventory-scanning",
          active: false,
        },
      ],
    },
    {
      name: "Delivery",
      icon: "delivery",
      link: "delivery",
      submodules: [
        {
          name: "Delivery Assingment",
          icon: "delivery-assignment",
          link: "delivery/delivery-assignment",
          active: false,
        },
        {
          name: "Consignment",
          icon: "consignment",
          link: "delivery/consginment",
          active: false,
        },
        {
          name: "Delivery Reports",
          icon: "delivery-reports",
          link: "delivery/delivery-reports",
          active: false,
        },
      ],
    },
  ];

  const [modules, setModules] = useState(modulesInitValues);

  const changeModuleData = (module, index, submodule) => {
    let modulesCopy = [...modules];
    modulesCopy.forEach((module, loopIndex) => {
      if (index != loopIndex) {
        module.submodules.forEach((submodule) => {
          submodule.active = false;
        });
      }
    });
    modulesCopy[index] = module;
    setModules(modulesCopy);
    changeCurrentSubModule(submodule);
  };

  return (
    <div className="">
      {/* <div className="side-bar-content flex flex-grow flex-row">
        <h1>SideBar</h1>
        <h1>Test</h1>
        <div>Test123</div>
      </div> */}

      {/* <div className="side-bar-content flex flex-col">
        {modules.map((module, index) => {
          return (
            <Module
              module={module}
              index={index}
              key={"module_" + index}
              changeModuleData={changeModuleData}
            />
          );
        })}
      </div> */}

      <nav className="top-100 left-0 h-screen min-w-[250px] overflow-auto bg-black bg-opacity-40 px-4 py-6 font-[sans-serif] text-white shadow-lg">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="mandali-regular text-md flex items-center rounded px-4 py-3 text-white transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
        {modules.map((module, index) => {
          return (
            <div className="mt-6" key={"sidebar_module_" + index}>
              <h6 className="text-md px-4 text-left font-bold text-white">
                {module.name}
              </h6>
              {module.submodules.map((submodule, subIndex) => {
                return (
                  <ul className="mt-3" key={"side_bar_submodule_" + subIndex}>
                    <li>
                      <Link
                        to={submodule.link}
                        className="mandali-regular text-md flex items-center rounded px-10 py-3 text-white transition-all hover:bg-blue-50 hover:text-blue-600 active:bg-blue-50 active:text-blue-600"
                      >
                        <span className="mandali-regular text-md">
                          {submodule.name}
                        </span>
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default SidebBar;
