import { useEffect } from "react";
import AboutCompany from "../../components/AboutCompany";
import StyleAbout from "./style";
import Banner from "../../components/ui/Banner";
import Footer from "../../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | About Us";
  }, []);

  return (
    <StyleAbout>
      <Banner name="About Us" />
      <AboutCompany />
      <Footer />
    </StyleAbout>
  );
};

export default About;
