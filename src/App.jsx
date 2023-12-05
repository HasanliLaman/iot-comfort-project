// import { Route, Routes } from "react-router-dom";
// import LogIn from "./pages/LogIn";
// import About from "./pages/About";
// import HomePage from "./pages/HomePage";
// import RoomDetails from "./pages/RoomDetails";
import Sidebar from "./components/Sidebar";
import GlobalStyle from "./assets/styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Sidebar />
        {/* <LogIn /> */}
        {/* <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<RoomDetails />} path="rooms/:id" />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
