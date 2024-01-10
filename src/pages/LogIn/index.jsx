import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import StyleLogIn from "./style";
import Container from "../../components/ui/Container";
import LogInForm from "../../components/LogInForm";

const LogIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | Login";
  }, []);

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard");
  }, [isLoggedIn, navigate]);

  return (
    <StyleLogIn>
      <Container>
        <h2>Login</h2>
        <p>Welcome back! Please enter your details.</p>
        <LogInForm />
      </Container>
    </StyleLogIn>
  );
};

export default LogIn;
