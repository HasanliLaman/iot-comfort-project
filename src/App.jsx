import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserLayout, AdminLayout } from "./components/ui/Layout";
import { ToastContainer } from "react-toastify";
import LogIn from "./pages/LogIn";
import Alarm from "./components/Alarm";
import GlobalStyle from "./assets/styles/GlobalStyles";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import RoomDetails from "./pages/RoomDetails";
import Rooms from "./pages/Rooms";
import Users from "./pages/Users";
import BuildingInfo from "./pages/BuildingInfo";
import Dashboard from "./pages/Dashboard";
import { socket } from "./socket";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [alarmEvents, setAlarmEvents] = useState([]);
  const [openAlarm, setOpenAlarm] = useState();

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onAlarmEvent = (value) => {
      setAlarmEvents((prev) => [value, ...prev]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("alarm", onAlarmEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("alarm", onAlarmEvent);
    };
  }, []);

  useEffect(() => {
    if (isConnected && alarmEvents.length) setOpenAlarm(true);
  }, [alarmEvents, isConnected]);

  return (
    <>
      <GlobalStyle />
      <Alarm open={openAlarm} setOpen={setOpenAlarm} text={alarmEvents[0]} />
      <div>
        <Routes>
          <Route element={<UserLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<RoomDetails />} path="/rooms/:id" />
          </Route>
          <Route element={<LogIn />} path="/admin" />
          <Route element={<AdminLayout />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Rooms />} path="/rooms" />
            <Route element={<Users />} path="/users" />
            <Route element={<BuildingInfo />} path="aboutbuilding" />
          </Route>
        </Routes>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
