import { Formik, Form, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import InputFieldAtom from '../molecules/InputFieldMolecule';
import ButtonAtom from '../atoms/ButtonAtom';

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
  const validationSchema = Yup.object({
    author_name: Yup.string().required('Name ist erforderlich'),
    birth_date: Yup.string().required('Geburtsdatum ist erforderlich'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
        <Form>
          <InputFieldAtom
            name="author_name"
            label="Autorname"
            type="text"
            value={values.author_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.author_name && errors.author_name ? errors.author_name : undefined}
          />

          <InputFieldAtom
            name="birth_date"
            label="Geburtsdatum"
            type="date"
            value={values.birth_date}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.birth_date && errors.birth_date ? errors.birth_date : undefined}
          />

          <ButtonAtom type="submit" disabled={isSubmitting}>
            Speichern
          </ButtonAtom>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorFormOrganism;
