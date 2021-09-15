import React, { useState } from 'react';

export const ControlledForm = () => {
  const [value, setValue] = useState('alma');

  function handleSubmit(event) {
    alert('An essay was submitted: ' + value);
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event);
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <br />
        <textarea value={value} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
