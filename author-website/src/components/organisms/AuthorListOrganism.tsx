import AuthorCardMolecule from '../molecules/AuthorCardMolecule';
import Stack from '@mui/material/Stack';

export type Author = {
  id: string;
  author_name: string;
  birth_date: string;
};

type AuthorListOrganismProps = {
  authors: Author[];
  onDeleted: (id: string) => void;
};

const AuthorListOrganism = ({ authors, onDeleted }: AuthorListOrganismProps) => {
  const handleDelete = (id: string) => {
    onDeleted(id);
  };

  return (
    <Stack spacing={2}>
      {authors.map((author) => (
        <AuthorCardMolecule
          key={author.id}
          id={author.id}
          name={author.author_name}
          birthDate={author.birth_date}
          onDelete={handleDelete}
        />
      ))}
    </Stack>
  );
};

export default AuthorListOrganism;
