import { createPortal } from "react-dom";
import StyleOverlay from "./style";

const Overlay = (props) => {
  return createPortal(
    <StyleOverlay {...props}></StyleOverlay>,
    document.querySelector("#modal")
  );
};

export default Overlay;
