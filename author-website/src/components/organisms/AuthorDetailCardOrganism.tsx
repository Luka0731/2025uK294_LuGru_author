import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorById } from "../../services/authorService";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Label from "../atoms/LabelAtom";
import Button from "../atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";

const AuthorDetailCardOrganism = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState<{
    id: number;
    author_name: string;
    birth_date: string;
  } | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!id) return;
      try {
        const response = await getAuthorById(id);
        setAuthor(response.data);
      } catch (error) {
        console.error("Problems while loading the author:", error);
      }
    };

    fetchAuthor();
  }, [id]);

  if (!author) return <Typography>Lade Daten...</Typography>;

  return (
    <Box sx={{ mt: 2 }}>
      <Label>Id</Label>
      <Typography variant="body1" gutterBottom>
        {author.id}
      </Typography>

      <Label>Autorname</Label>
      <Typography variant="body1" gutterBottom>
        {author.author_name}
      </Typography>

      <Label>Geburtsdatum</Label>
      <Typography variant="body1" gutterBottom>
        {author.birth_date}
      </Typography>

      <Button onClick={() => navigate("/authors")}>Zurück</Button>
    </Box>
  );
};

export default AuthorDetailCardOrganism;
