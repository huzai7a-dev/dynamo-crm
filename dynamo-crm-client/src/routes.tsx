import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
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
