import StyleLogIn from "./style";
import Container from "../../components/ui/Container";
import LogInForm from "../../components/LogInForm";

const LogIn = () => {
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
