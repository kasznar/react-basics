import React from 'react';
import { BasicsDemo } from './Basics/BasicsDemo';
import { ClassDemo } from './ClassComponents/ClassDemo';
import { ContextDemo } from './Context/ContextDemo';
import { FormsDemo } from './Forms/FormsDemo';
import { HooksDemo } from './Hooks/HooksDemo';
import { Resources } from './Resources';

export const App = () => {
  return (
    <div>
      <h1>React kepzes</h1>
      <BasicsDemo />
      <HooksDemo />
      <FormsDemo />
      <ClassDemo />
      <ContextDemo />
      <Resources />
    </div>
  );
};
