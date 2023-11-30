import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<RoomDetails />} path="rooms/:id" />
        </Routes>
      </div>
    </>
  );
}

export default App;
