import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Input  from './Input'
import styles from './Forms.module.css'
    
const AccountSettings = () => {
  return (
    <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: ""
        }}

        validationSchema={Yup.object({
          email: Yup.string()
          .email("Invalid email addresss`")
          .required("Required"),

          password: Yup.string()
            .strict(true)
            .min(8, "Must be at least 8 characters long")
            .required("Required")
            .trim("Can't use any white spaces"),

          passwordConfirm: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
      >
        {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
          <div>
            <Form className={styles.container} onSubmit={handleSubmit}>
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="catalina@innoloft.com"
                onChange={handleChange}
                value={values.email}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="eg. ********"
                onChange={handleChange}
                value={values.password}
              />
              <Input
                label="Confirm password"
                name="passwordConfirm"
                type="password"
                placeholder="eg. ********"
                onChange={handleChange}
                value={values.passwordConfirm}
              />
              <button 
              type="submit"
              disabled={isSubmitting}>
              Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    
  );
};



export default AccountSettings;