// import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import LogIn from "./pages/LogIn";
// import About from "./pages/About";
// import HomePage from "./pages/HomePage";
// import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <LogIn />
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
