import StyleAboutCompany from "./style";
import aipl from "../../assets/images/aipl.jpg";
import aiplStaff from "../../assets/images/aipl-staff.jpg";
import Container from "../ui/Container";

const AboutCompany = () => {
  return (
    <StyleAboutCompany>
      <Container>
        <div className="info-block">
          <img alt="aipl" src={aipl} />
          <article>
            <h2>Who are we?</h2>
            <p>
              The AIP-PRIMECA Lorraine cluster is one of the 10 regional members
              of GIS S-mart. It is a joint service of the University of
              Lorraine. The center is a regional center of educational resources
              of an industrial nature, used by regional training courses
              (initial or continuing) around the theme of the industry of the
              future. This resource center is used as experimental support for
              initial and continuing training in the field of manufacturing and
              integrated design. The center aims to promote the implementation
              of industrial manipulations for in-depth teaching by discipline or
              interdisciplinary, from BAC+2 to BAC+5.
            </p>
          </article>
        </div>
        <div className="info-block">
          <img alt="aipl" src={aiplStaff} />
          <article>
            <h2>Our mission</h2>
            <p>
              AIP-PRIMECA Lorraine is French academic community for the industry
              of the future which creates a fertile environment by placing
              engineering at the service of society. It brings together an open
              academic community to build scientific, technological and societal
              change on a local and national scale. The center provides
              educational resources (platforms and software), of an industrial
              nature, shared for teaching. These resources are accessible in
              person or remotely. It also manages the sharing of business
              software through the Lorraine Network of Digital Mechanics
              Resources which brings together 21 components or laboratories.
            </p>
          </article>
        </div>
      </Container>
    </StyleAboutCompany>
  );
};

export default AboutCompany;
