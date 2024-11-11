import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography } from '@mui/material';
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';

// Валідаційна схема
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log('login error');
      });
    resetForm();
  };

  return (
    <Box className={css.container}>
      <Typography variant="h5" gutterBottom className={css.title}>
        Log In
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Box className={css.field}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                variant="outlined"
                className={css.input}
                helperText={
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                }
              />
            </Box>
            <Box className={css.field}>
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                className={css.input}
                helperText={
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.error}
                  />
                }
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              className={css.button}
            >
              Log In
            </Button>
            <Box className={css.paragraph} textAlign="center" mt={2}>
              Don’t have an account?{' '}
              <Link to="/register" className={css.link}>
                Create Account
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
