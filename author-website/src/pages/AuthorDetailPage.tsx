import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AuthorDetailCardOrganism from '../components/organisms/AuthorDetailCardOrganism';

const AuthorDetailPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Autorendetails
      </Typography>
      <AuthorDetailCardOrganism />
    </Container>
  );
};

export default AuthorDetailPage;
