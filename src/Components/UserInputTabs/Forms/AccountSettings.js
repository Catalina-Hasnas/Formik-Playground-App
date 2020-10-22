import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Input  from './Input'
import styles from './Forms.module.css'


const AccountSettings = () => {
    return (
      <>
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
              .min(8, "Must be 8 characters or less")
              .required("Required"),

            passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form>
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="catalina@innoloft.com"
            />
            <Input
              label="Password"
              name="password"
              type="text"
              placeholder="eg. ********"
            />
            <Input
              label="Confirm password"
              name="passwordConfirm"
              type="text"
              placeholder="eg. ********"
            />
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

export default AccountSettings;