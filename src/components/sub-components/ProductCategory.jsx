import { useState } from "react";
import "../../assets/css/table.css";
import ProductCategoryInfo from "../ui-components/ProductCategoryInfo";
import ProductsTable from "../ui-components/ProductsTable";

function ProductManagement() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const openAdd = () => {
    console.log("openAdd");
    setIsOpenAdd(true);
  };

  const closeAdd = () => {
    console.log("closeAdd");
    setIsOpenAdd(false);
  };

  return (
    <div className="page-pane">
      <div className="mandali-regular page-header">
        <div className="page-title">Product Categories</div>
      </div>

      <div className="page-content">
        <div className="table-actions">
          <div className="table-action" onClick={openAdd}>
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=25&id=102544&format=png"
            />{" "}
            Add{" "}
          </div>
          <div className="table-action">
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=25&id=102544&format=png"
            />{" "}
            Edit{" "}
          </div>
          <div className="table-action">
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=25&id=102544&format=png"
            />{" "}
            Delete
          </div>
        </div>
        <ProductsTable />
      </div>

      {isOpenAdd && <ProductCategoryInfo closeModal={closeAdd} />}
    </div>
  );
}

export default ProductManagement;
