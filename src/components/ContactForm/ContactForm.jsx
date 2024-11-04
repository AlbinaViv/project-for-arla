import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export const ContactForm = () => {
  const usernameFildeId = useId();
  const userphoneFildeId = useId();

  const dispatch = useDispatch();

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const form = evt.target;
  //   const { name, number } = form.elements;

  //   onSubmit({
  //     name: name.value,
  //     number: number.value,
  //   });

  // Посилання на DOM-елементи
  // console.log(number або  name);

  // Значення полів
  // console.log(form.elements.name.value);
  // console.log(form.elements.number.value);

  // Скидаємо значення полів після відправки
  // form.reset();
  // };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        // const updedvalues = { ...values, number: Number(values.number) };
        const contact = { name: values.name, number: values.phone };
        console.log(contact);
        dispatch(addContact(contact));

        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label
          className={css.label}
          htmlFor={usernameFildeId}
        >
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={usernameFildeId}
        />
        <ErrorMessage
          className={css.error}
          name="name"
          component="span"
        />
        <label
          className={css.label}
          htmlFor={userphoneFildeId}
        >
          Number
        </label>
        <Field
          className={css.field}
          type="tel"
          name="phone"
          id={userphoneFildeId}
        />
        <ErrorMessage
          className={css.error}
          name="phone"
          component="span"
        />

        <button
          className={css.button}
          type="submit"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
