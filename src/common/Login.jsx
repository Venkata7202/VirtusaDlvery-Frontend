import { useNavigate } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";
import Logo from "../components/ui-components/Logo";
import HeroSection from "../components/sub-components/HeroSection";
import LoginForm from "../components/ui-components/LoginForm";
import axios from "axios";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  // Write method to handle login and user axios to make a POST request to the server
  // If the request is successful, set the token and navigate to the dashboard
  const handleLogin = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/v1/auth/authenticate", {
        email,
        password,
      });
      setToken(response.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div>
      <div className="align-center">
        <Logo />
      </div>
      <div className="hero-section-container">
        <HeroSection>
          <LoginForm handleLogin={handleLogin} />
        </HeroSection>
      </div>
    </div>
  );
};

export default Login;
