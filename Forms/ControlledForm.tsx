import React, { useState } from 'react';

export const ControlledForm = () => {
  const [value, setValue] = useState('alma');

  function handleSubmit(event) {
    alert('Name: ' + value);
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event);
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: {value}
        <br />
        <input value={value} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" value="Submit" disabled={!value} />
    </form>
  );
};
