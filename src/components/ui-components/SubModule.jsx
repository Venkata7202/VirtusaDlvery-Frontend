import { Link } from "react-router-dom";

function SubModule({ submodule, changeSubModule }) {
  const changeSubModuleInternal = (submodule) => {
    // Add validation or clear data before changing submodule
    // changeSubModule(submodule);
  };

  return (
    <div className="sub-module-container">
      <Link to={submodule.link}>
        <div
          className={
            submodule.active ? " sub-module-name active" : "sub-module-name"
          }
          onClick={changeSubModuleInternal.bind(this, submodule)}
        >
          {submodule.name}
        </div>
      </Link>
    </div>
  );
}

export default SubModule;
