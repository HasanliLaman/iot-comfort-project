import { createGlobalStyle } from "styled-components";
import Reset from "./Reset";
import Typography from "./Typography";
import Variables from "./Variables";
import Modal from "./Modal";

const GlobalStyle = createGlobalStyle`
${Reset}
${Typography}
${Variables}
${Modal}
`;

export default GlobalStyle;
