import React from 'react';
import { Clock } from '../ClassComponents/ClassLifecycle';
import { ClassWithProps } from '../ClassComponents/ClassWithProps';
import { ClassWithState } from '../ClassComponents/ClassWithState';

export const ClassDemo = () => (
  <div>
    <h2>Class alapu komponensek</h2>
    <hr />
    <ClassWithProps name="David" jobTitle="fe dev" workHours={8} />
    <ClassWithState increment={2} />
    <Clock />
  </div>
);
