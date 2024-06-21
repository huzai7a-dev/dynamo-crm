import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./layout";
import { authRoutes, routes } from "./routes";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token") || false;

  useEffect(() => {
    const isProtectedRoute =
      location.pathname !== "/login" && location.pathname !== "/signup";
    if (isProtectedRoute && !isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/" element={<AppLayout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      ) : (
        authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      )}
    </Routes>
  );
};

export default App;
