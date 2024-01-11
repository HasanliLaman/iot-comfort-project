/* eslint-disable react/prop-types */
import Container from "../Container";
import StyleTabs from "./style";

const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <StyleTabs>
      <Container>
        <li
          onClick={() => setCurrentTab("statistics")}
          className={currentTab === "statistics" ? "active-tab" : ""}
        >
          Statistics
        </li>
        <li
          onClick={() => setCurrentTab("prediction")}
          className={currentTab === "prediction" ? "active-tab" : ""}
        >
          Predictions
        </li>
      </Container>
    </StyleTabs>
  );
};

export default Tabs;
