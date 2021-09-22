import React from 'react';

interface State {
  firstName: string;
  lastName: string;
  favouriteColor: string;
  jobTitle: string;
}

export const MultipleFields = () => {
  const [values, setValues] = React.useState<State>({
    firstName: '',
    lastName: '',
    favouriteColor: '',
    jobTitle: '',
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <div>
      first name: {values.firstName}
      <br />
      <input value={values.firstName} onChange={handleChange('firstName')} />
      <br />
      last name: {values.lastName}
      <br />
      <input value={values.lastName} onChange={handleChange('lastName')} />
      <br />
      favourite color: {values.favouriteColor}
      <br />
      <input
        value={values.favouriteColor}
        onChange={handleChange('favouriteColor')}
      />
      <br />
      job title: {values.jobTitle}
      <br />
      <input value={values.jobTitle} onChange={handleChange('jobTitle')} />
    </div>
  );
};
