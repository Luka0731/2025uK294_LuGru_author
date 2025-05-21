import LoginFormOrganism from '../components/organisms/LoginFormOrganism';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>
        <LoginFormOrganism />
      </Box>
    </Container>
  );
};

export default Login;
