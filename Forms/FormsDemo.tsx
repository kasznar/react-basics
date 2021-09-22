import React from 'react';
import { ControlledForm } from '../Forms/ControlledForm';
import { MultipleFields } from '../Forms/MultipleFields';

export const FormsDemo = () => (
  <div>
    <h2>Forms</h2>
    <hr />
    <h3>Controlled form</h3>
    <ControlledForm />
    <h3>Multiple fields</h3>
    <MultipleFields />
  </div>
);
