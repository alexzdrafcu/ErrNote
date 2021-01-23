
import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import Login from './Login'



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <Login submitForm={submitForm}/>
        )}
      </div>
    </>
  );
};

export default Form;