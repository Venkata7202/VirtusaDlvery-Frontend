import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "../components/Dashboard";
import ProductManagement from "../components/sub-components/ProductManagement";
import ProductCategory from "../components/sub-components/ProductCategory";
import MainDashboard from "../components/sub-components/MainDashboard";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Dashboard />,
          children: [
            {
              path: "/dashboard",
              element: <MainDashboard />,
            },
            {
              path: "/inventory/product-management",
              element: <ProductManagement />,
            },
            {
              path: "/inventory/product-category",
              element: <ProductCategory />,
            },
          ],
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    // {
    //   path: "/",
    //   element: <div>Home Page</div>,
    // },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
