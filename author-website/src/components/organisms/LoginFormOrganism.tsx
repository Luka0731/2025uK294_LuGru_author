import { Formik, Form, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import InputFieldMolecule from '../molecules/InputFieldMolecule';
import ButtonAtom from '../atoms/ButtonAtom';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

type LoginValues = {
  email: string;
  password: string;
};

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Ungültige E-Mail').required('Pflichtfeld'),
  password: Yup.string().min(6, 'Mind. 6 Zeichen').required('Pflichtfeld'),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setErrors }: FormikHelpers<LoginValues>
  ) => {
    try {
      const response = await login(values.email, values.password);
      const token = response.data.accessToken;

      localStorage.setItem('token', token);
      navigate('/authors');
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 401) {
        setErrors({ email: 'Login fehlgeschlagen', password: ' ' });
      } else {
        console.error(axiosError);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
        <Form>
          <InputFieldMolecule
            name="email"
            label="E-Mail"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : undefined}
          />

          <InputFieldMolecule
            name="password"
            label="Passwort"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? errors.password : undefined}
          />

          <ButtonAtom type="submit" disabled={isSubmitting}>
            Login
          </ButtonAtom>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;