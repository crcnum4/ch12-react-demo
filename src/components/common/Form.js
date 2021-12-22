import React from 'react';

const Form = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(e);
  }
  return (
    <form style={{ ...styles.form, ...props.style }} onSubmit={handleSubmit}>
      {props.children}
    </form>
  )
}

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
  },
};

export default Form;