import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Input  from './Input'
import Select from './Select'
import styles from './Forms.module.css'

const UserInformation = () => {
  return (
    <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          street: "",
          houseNumber: "",
          postalCode: "",
          country: ""
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
          .strict(true)
          .required("Required")
          .trim("Can't use any white spaces"),

          lastName: Yup.string()
          .strict(true)
          .required("Required")
          .trim("Can't use any white spaces"),

          street: Yup.string()
          .required("Required"),

          houseNumber: Yup.number()
          .required("Required"),

          postalCode: Yup.string()
          .strict(true)
          .matches(/[0-9]+/gi, "Enter number only")
          .min(5, "Must be 5 numbers")
          .max(5, "Can't exceed 5 numbers")
          .required("Required")
          .trim("Can't use any white spaces"),

          country: Yup.string()
          .oneOf(
            ["Germany", "Austria", "Switzerland"],'Invalid Country'
          )
          .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >

        {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
        <>
        <Form className={styles.container} onSubmit={handleSubmit} >
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            onChange={handleChange}
            value={values.firstName}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Smith"
            onChange={handleChange}
            value={values.lastName}
          />
          <Input
            label="Street"
            name="street"
            type="text"
            placeholder="Roses str."
            onChange={handleChange}
            value={values.street}
          />
          <Input
            label="House Number"
            name="houseNumber"
            type="text"
            placeholder="3"
            onChange={handleChange}
            value={values.houseNumber}
          />
          <Input
            label="Postal Code"
            name="postalCode"
            type="text"
            placeholder="10115"
            onChange={handleChange}
            value={values.postalCode}
          />
          <Select 
            label="Country" 
            name="country"
            onChange={handleChange}
            value={values.country}
          >
            <option value="">Select a country</option>
            <option value="Germany">Germany</option>
            <option value="Austria">Austria</option>
            <option value="Switzerland">Switzerland</option>
          </Select>
          <button 
          type="submit"
          disabled={isSubmitting}>
          Submit
          </button>
        </Form>
        </>
        )}
      </Formik>
  );
};

export default UserInformation;