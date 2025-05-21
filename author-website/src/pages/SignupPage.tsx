import SignupFormOrganism from '../components/organisms/SignupFormOrganism';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Registrieren
        </Typography>
        <SignupFormOrganism />
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Du hast bereits ein Konto? <Link to="/login">Hier einloggen</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
