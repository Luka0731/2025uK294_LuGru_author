import LoginFormOrganism from "../components/organisms/LoginFormOrganism";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <LoginFormOrganism />
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Noch kein Konto? <Link to="/signup">Jetzt registrieren</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
