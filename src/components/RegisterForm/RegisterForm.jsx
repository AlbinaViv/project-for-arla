import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Box, Typography } from "@mui/material";
import css from "./RegisterForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Box className={css.container}>
      <Typography
        variant="h5"
        gutterBottom
        className={css.title}
      >
        Register
      </Typography>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Box className={css.field}>
              <Field
                name="name"
                as={TextField}
                label="Username"
                fullWidth
                variant="outlined"
                className={css.input}
                helperText={
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.error}
                  />
                }
              />
            </Box>
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
                    component="div"
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
                    component="div"
                    className={css.error}
                  />
                }
              />
            </Box>
            <Button
              className={css.button}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
