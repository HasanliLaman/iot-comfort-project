import { Route, Routes } from "react-router-dom";
import { UserLayout, AdminLayout } from "./components/ui/Layout";
import LogIn from "./pages/LogIn";
import GlobalStyle from "./assets/styles/GlobalStyles";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import RoomDetails from "./pages/RoomDetails";
import Rooms from "./pages/Rooms";
import Users from "./pages/Users";
import BuildingInfo from "./pages/BuildingInfo";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Routes>
          <Route element={<UserLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<RoomDetails />} path="rooms/:id" />
          </Route>
          <Route element={<LogIn />} path="login" />
          <Route element={<AdminLayout />}>
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<Rooms />} path="rooms" />
            <Route element={<Users />} path="users" />
            <Route element={<BuildingInfo />} path="aboutbuilding" />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
