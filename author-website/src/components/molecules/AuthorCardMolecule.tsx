import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '../atoms/ButtonAtom';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
  name: string;
  birthDate: string;
  onDelete: (id: string) => void;
};

const AuthorCardMolecule = ({ id, name, birthDate, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2">Geburtsdatum: {birthDate}</Typography>

      <Stack direction="row" spacing={1} mt={1}>
        <Button onClick={() => navigate(`/authors/${id}`)}>Details</Button>
        <Button onClick={() => navigate(`/authors/${id}/edit`)}>Bearbeiten</Button>
        <Button onClick={() => onDelete(id)}>Löschen</Button>
      </Stack>
    </Box>
  );
};

export default AuthorCardMolecule;
