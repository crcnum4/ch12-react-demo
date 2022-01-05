import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import FaButton from '../faCommon/FaButton';
import InlineInputContainer from '../common/InlineInputContainer';

const LoginForm = ({query, submitting, updateForm, onSubmit}) => {

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value)
  }

  const handleSubmit = (e) => {
    onSubmit(e);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '800px',
        width: '100%'
      }}
    >
      <InlineInputContainer>
        <Input
          id="username"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
          value={query.username}
          required
        />
      </InlineInputContainer>
      <InlineInputContainer>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={query.password}
          required
        />
      </InlineInputContainer>
      <FaButton disabled={submitting}>Login</FaButton>
    </Form>
  )
}

export default LoginForm;