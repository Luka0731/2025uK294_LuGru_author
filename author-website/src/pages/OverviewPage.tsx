import { useEffect, useState } from "react";
import { getAuthors, deleteAuthor } from "../services/authorService";
import AuthorListOrganism from "../components/organisms/AuthorListOrganism";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import ButtonAtom from "../components/atoms/ButtonAtom";
import { useNavigate } from 'react-router-dom';

export type Author = {
  id: string;
  author_name: string;
  birth_date: string;
};

const OverviewPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const navigate = useNavigate();

  const loadAuthors = async () => {
    try {
      const response = await getAuthors();
      setAuthors(response.data);
    } catch (error) {
      console.error("Problems loading the Authors:", error);
    }
  };

  const handleDeleted = async (id: string) => {
    try {
      await deleteAuthor(id);
      setAuthors((prev) => prev.filter((author) => author.id !== id));
    } catch (error) {
      console.error("Something went wrong whlie deleting:", error);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  function handleLogout(): void {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Autorenübersicht
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        <ButtonAtom onClick={() => navigate("/authors/create")}>Autor hinzufügen</ButtonAtom>
        <ButtonAtom onClick={handleLogout}>Logout</ButtonAtom>
      </Stack>

      <AuthorListOrganism authors={authors} onDeleted={handleDeleted} />
    </Container>
  );
};

export default OverviewPage;
