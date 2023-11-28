import AboutCompany from "../../components/AboutCompany";
import StyleAbout from "./style";
import Banner from "../../components/ui/Banner";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <StyleAbout>
      <Banner name="About Us" />
      <AboutCompany />
      <Footer />
    </StyleAbout>
  );
};

export default About;
