import CreateOrder from "./pages/Order/CreateOrder";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Order/Orders";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/create-order",
    element: <CreateOrder />,
  },
];

const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
export { routes, authRoutes };
