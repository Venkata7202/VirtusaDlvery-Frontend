import SubModule from "./SubModule";
import "../../assets/css/module.css";

function Module({ module, index, changeModuleData }) {
  const changeSubModule = (submodule) => {
    module.submodules.forEach((submodule) => {
      submodule.active = false;
    });

    submodule.active = true;

    changeModuleData(module, index, submodule);
  };

  return (
    <div>
      <div className="module-container">
        <div className="module-name">{module.name}</div>
        <div className="sub-modules-container flex flex-col gap-5">
          {module.submodules.map((submodule, index) => {
            return (
              <SubModule
                submodule={submodule}
                key={"submodule_" + index}
                changeSubModule={changeSubModule}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Module;
