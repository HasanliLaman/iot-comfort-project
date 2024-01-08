import { Route, Routes } from "react-router-dom";
import { UserLayout, AdminLayout } from "./components/ui/Layout";
import { ToastContainer } from "react-toastify";
import LogIn from "./pages/LogIn";
import GlobalStyle from "./assets/styles/GlobalStyles";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import RoomDetails from "./pages/RoomDetails";
import Rooms from "./pages/Rooms";
import Users from "./pages/Users";
import BuildingInfo from "./pages/BuildingInfo";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/Auth/ProtectedAuth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Routes>
          <Route element={<UserLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<RoomDetails />} path="/rooms/:id" />
          </Route>
          <Route element={<LogIn />} path="/admin" />
          <Route element={<AdminLayout />}>
            <Route
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
              path="dashboard"
            />
            <Route
              element={
                <ProtectedRoute>
                  <Rooms />
                </ProtectedRoute>
              }
              path="rooms"
            />
            <Route
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
              path="users"
            />
            <Route
              element={
                <ProtectedRoute>
                  <BuildingInfo />
                </ProtectedRoute>
              }
              path="aboutbuilding"
            />
          </Route>
        </Routes>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
