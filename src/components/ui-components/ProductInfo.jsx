import { useState } from "react";
import TextField from "../ui-elements/TextField";
import "../../assets/css/product.css";
import Dropdown from "../ui-elements/Dropdown";
import Button from "../ui-elements/Button";
import { useParams } from "react-router-dom";

function ProductInfo({ closeModal }) {
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const params = useParams();

  if (params.id) {
    // Need to call API to get product info
  }

  const defaultCategories = [
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 2,
      name: "Clothing",
    },
    {
      id: 3,
      name: "Footwear",
    },
    {
      id: 4,
      name: "Accessories",
    },
  ];

  const changeSelectedCategory = (id) => {
    setProductInfo({ ...productInfo, category: id });
  };

  const [categories, setCategories] = useState(defaultCategories);

  const onChange = (e, id) => {
    setProductInfo({ ...productInfo, [id]: e.target.value });
  };

  const saveProduct = () => {
    // Need to add product form validation
    // Need to call API to save product
  };

  const triggerModalClose = () => {
    // Need to close modal
    closeModal();
  };

  return (
    <div className="modal fixed inset-0 z-[1000] flex h-full w-full flex-wrap items-center justify-center overflow-auto p-4 font-[sans-serif] before:fixed before:inset-0 before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
      <div className="modal-body relative w-full max-w-lg rounded-md p-6 shadow-lg">
        <div className="flex items-center border-b pb-3 text-white">
          <h3 className="mandali-regular flex-1 text-xl font-bold">
            Add/Edit Product
          </h3>
          <svg
            onClick={triggerModalClose}
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 w-3.5 shrink-0 cursor-pointer fill-black hover:fill-red-500"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
        <div className="my-6">
          <div className="product-form">
            <div className="product-form-entry">
              <p className="product-label">Name</p>
              <TextField
                id="name"
                type="text"
                placeholder="Enter product name"
                value={productInfo.name}
                onChange={(e) => onChange(e, "name")}
              />
            </div>
            <div className="product-form-entry">
              <p className="product-label">Description</p>
              <TextField
                id="description"
                type="text"
                placeholder="Enter product description"
                value={productInfo.description}
                onChange={(e) => onChange(e, "description")}
              />
            </div>
            <div className="product-form-entry">
              <p className="product-label">Category</p>
              <Dropdown
                values={categories}
                onChange={changeSelectedCategory}
                id={productInfo.category}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around space-x-4 border-t pt-6">
          <div className="product-form-entry align-center">
            <Button
              value="Cancel"
              onClick={triggerModalClose}
              className={
                "rounded-md border-none bg-gray-200 px-6 py-2 text-sm text-black outline-none hover:bg-gray-300 active:bg-gray-200"
              }
            />
          </div>
          <div className="product-form-entry align-center">
            <Button
              value="Save"
              onClick={saveProduct}
              className={
                "btn-primary outline-nones rounded-md border-none px-6 py-2 text-sm text-white"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
