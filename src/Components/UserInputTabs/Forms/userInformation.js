import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Input  from './Input'
import styles from './Forms.module.css'

const UserInformation = () => {
    return (
      <>
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
            .required("Required"),

            lastName: Yup.string()
            .required("Required"),

            street: Yup.string()
            .required("Required"),

            houseNumber: Yup.number()
            .required("Required"),

            postalCode: Yup.number()
            .max(5, "Can't exceed 5 numbers")
            .min(5, "Can't be less than 5 numbers")
            .required("Required"),

            country: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              ["Germany", "Austria", "Switzerland", "Invalid Country"],
              "Invalid Job Type"
            )
            .required("Required")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form>
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="John"
            />
            <Input
              label="Second Name"
              name="secondName"
              type="text"
              placeholder="Smith"
            />
            <Input
              label="Street"
              name="street"
              type="text"
              placeholder="Roses str."
            />
            <Input
              label="House Number"
              name="houseNumber"
              type="text"
              placeholder="3"
            />
            <Input
              label="Postal Code"
              name="postalCode"
              type="text"
              placeholder="10115"
            />
            <Select label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
            </Select>
            {/* <Select label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Select> */}
            
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
};

export default UserInformation;