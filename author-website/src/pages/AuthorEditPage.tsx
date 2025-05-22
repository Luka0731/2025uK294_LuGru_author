import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AuthorFormOrganism from '../components/organisms/AuthorFormOrganism';
import { getAuthorById, updateAuthor } from '../services/authorService';
import type { FormikHelpers } from 'formik';

type AuthorFormValues = {
  author_name: string;
  birth_date: string;
};

const AuthorEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<AuthorFormValues | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!id) return;
      try {
        const response = await getAuthorById(id);
        setInitialValues({
          author_name: response.data.author_name,
          birth_date: response.data.birth_date,
        });
      } catch (error) {
        console.error('Error when loading the author:', error);
      }
    };

    fetchAuthor();
  }, [id]);

  const handleSubmit = async (
    values: AuthorFormValues,
    { setSubmitting }: FormikHelpers<AuthorFormValues>
  ) => {
    if (!id) return;
    try {
      await updateAuthor(id, values);
      navigate('/authors');
    } catch (error) {
      console.error('Error when updating the author:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!initialValues) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography>Lade Daten...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Autor bearbeiten
      </Typography>
      <AuthorFormOrganism initialValues={initialValues} onSubmit={handleSubmit} />
    </Container>
  );
};

export default AuthorEditPage;
