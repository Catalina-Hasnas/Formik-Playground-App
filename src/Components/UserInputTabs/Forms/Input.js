import React from 'react';
import {useField} from 'formik';
import styles from './Forms.module.css'


const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  let classes = [];

  // switch (props.name === "password") {
  //   case (props.value.length>=2 && props.value.length<=4):
  //     classes.push(styles.passWeak);
  //   case (props.value.length>=5 && props.value.length<=7):
  //     classes.push(styles.passMedium);
  //   case (props.name === "password" && props.value.length>=8):
  //     classes.push(styles.passStrong)
  //   default:
  //     classes.push("")
  // }
  
  if (props.name === "password" && props.value.length>=2 && props.value.length<=4 ) {
    classes.push(styles.passWeak)
  } else if (props.name === "password" && props.value.length>=5 && props.value.length<=7) {
    classes.push(styles.passMedium)
  } else if (props.name === "password" && props.value.length>=8) {
    classes.push(styles.passStrong)
  }
  
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input className={classes} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;