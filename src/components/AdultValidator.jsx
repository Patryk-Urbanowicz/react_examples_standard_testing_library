import React, { useState } from 'react';

const AdultValidator = ({ min = 4, max = 100, shouldRender = true }) => {
  const [age, setAge] = useState('');
  const [ageEntered, setAgeEntered] = useState(false);

  if (!shouldRender) {
    return null;
  }

  const handleChange = ({ target: { value } }) => {
    if (value.match(/^\d+$/) || value === '') {
      setAge(value);
      setAgeEntered(value !== '');
    }
  };

  const getValidationError = () => {
    if (age < min) {
      return 'Are you really so young?';
    }
    if (age > max) {
      return 'Are you really so old?';
    }
    return 'This page is available only for adult people';
  };

  const isValid = age >= 18 && age <= max;

  return (
    <div>
      <label htmlFor="age">Put your age here</label>
      <input id="age" name="age" value={age} onChange={handleChange} />
      {ageEntered && <div role="alert">{isValid ? 'You are grown up!' : getValidationError()}</div>}
    </div>
  );
};

export { AdultValidator };
