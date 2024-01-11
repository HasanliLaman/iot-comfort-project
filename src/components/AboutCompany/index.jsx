import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getAbout } from "../../server";
import StyleAboutCompany from "./style";
import aipl from "../../assets/images/aipl.jpg";
import aiplStaff from "../../assets/images/aipl-staff.jpg";
import map from "../../assets/images/aipl-plan.png";
import Container from "../ui/Container";

library.add(faSpinner);

const AboutCompany = () => {
  const { data, isLoading, isRefetching } = useQuery(["aboutData"], getAbout);

  return (
    <StyleAboutCompany>
      {isLoading || isRefetching ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FontAwesomeIcon
            icon="fa-spinner"
            spin
            style={{
              margin: "5rem 0",
              color: "#ccc",
              fontSize: "5rem",
            }}
          />
        </div>
      ) : (
        <Container>
          <div className="info-block">
            <img alt="aipl" src={aipl} />
            <article>
              <h2>Who are we?</h2>
              <p>{data.data.whoAreWe}</p>
            </article>
          </div>
          <div className="info-block">
            <img alt="aipl" src={aiplStaff} />
            <article>
              <h2>Our mission</h2>
              <p>{data.data.ourMision}</p>
            </article>
          </div>
          <div className="building-map">
            <h2>Building Map</h2>
            <img alt="Building map" src={map} />
          </div>
        </Container>
      )}
    </StyleAboutCompany>
  );
};

export default AboutCompany;
