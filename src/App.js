import "./App.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./common/AuthProvider";
import Routes from "./common/Routes";
// import MainPage from "./components/MainPage";
// import Dashboard from "./components/Dashboard";
// import ProductManagement from "./components/sub-components/ProductManagement";
// import ProductInfo from "./components/ui-components/ProductInfo";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//   },
//   {
//     path: "dashboard",
//     element: <Dashboard />,
//     children: [
//       {
//         index: true,
//         element: <ProductManagement />,
//       },
//       {
//         path: "/dashboard/inventory/product-management",
//         element: <ProductManagement />,
//       },
//       {
//         path: "/dashboard/inventory/product-management/:id",
//         element: <ProductInfo />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(<App />);

// export default App;
