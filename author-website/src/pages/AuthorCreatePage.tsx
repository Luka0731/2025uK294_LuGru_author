import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AuthorFormOrganism from '../components/organisms/AuthorFormOrganism';
import { createAuthor } from '../services/authorService';
import { useNavigate } from 'react-router-dom';
import { type FormikHelpers } from 'formik';

type AuthorFormValues = {
  author_name: string;
  birth_date: string;
};

const AuthorCreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: AuthorFormValues,
    { setSubmitting }: FormikHelpers<AuthorFormValues>
  ) => {
    try {
      await createAuthor(values);
      navigate('/authors');
    } catch (error) {
      console.error('Fehler beim Erstellen des Autors:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Autor hinzufügen
      </Typography>
      <AuthorFormOrganism onSubmit={handleSubmit} />
    </Container>
  );
};

export default AuthorCreatePage;
