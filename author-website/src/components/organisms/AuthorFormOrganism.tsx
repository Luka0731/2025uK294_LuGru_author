import { Formik, Form, type FormikHelpers } from 'formik';
import InputFieldMolecule from '../molecules/InputFieldMolecule';
import ButtonAtom from '../atoms/ButtonAtom';
import { useNavigate } from 'react-router-dom';

type AuthorFormValues = {
  author_name: string;
  birth_date: string;
};

type AuthorFormOrganismProps = {
  initialValues?: AuthorFormValues;
  onSubmit: (values: AuthorFormValues, helpers: FormikHelpers<AuthorFormValues>) => void;
};

const AuthorFormOrganism = ({
  initialValues = { author_name: '', birth_date: '' },
  onSubmit,
}: AuthorFormOrganismProps) => {
  const navigate = useNavigate();

  const validate = (values: AuthorFormValues) => {
    const errors: Partial<AuthorFormValues> = {};

    if (!values.author_name.trim()) {
      errors.author_name = 'Bitte gib einen Namen ein';
    } else if (values.author_name.length < 3) {
      errors.author_name = 'Name muss mindestens 3 Zeichen lang sein';
    } else if (values.author_name.length > 100) {
      errors.author_name = "Name darf nicht läger als 100 Zeichen sein"
    }

    if (!values.birth_date) {
      errors.birth_date = 'Geburtsdatum ist erforderlich';
    } else if (new Date(values.birth_date) > new Date()) {
        errors.birth_date = 'Geburtsdatum darf nicht in der Zukunft liegen';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
        <Form>
          <InputFieldMolecule
            name="author_name"
            label="Autorname"
            type="text"
            value={values.author_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.author_name && errors.author_name ? errors.author_name : undefined}
          />

          <InputFieldMolecule
            name="birth_date"
            label=""
            type="date"
            value={values.birth_date}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.birth_date && errors.birth_date ? errors.birth_date : undefined}
          />

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <ButtonAtom type="submit" disabled={isSubmitting}>
              Speichern
            </ButtonAtom>
            <ButtonAtom type="button" onClick={() => navigate('/authors')}>
              Abbrechen
            </ButtonAtom>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorFormOrganism;
