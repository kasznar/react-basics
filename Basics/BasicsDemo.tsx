import React, { useState } from 'react';
import { ChildrenProp } from '../Basics/ChildrenProp';
import { ConditionalRendering } from '../Basics/ConditionalRendering';
import { FCInlineAndDeconstruction } from '../Basics/FCInlineAndDeconstruction';
import { FunctionComponentWithProps } from '../Basics/FunctionComponentWithProps';
import { ReceiveEvent } from '../Basics/HandleEvents';
import { List, List2 } from '../Basics/Lists';
import { SimplestFunctionComponent } from '../Basics/SimplestFunctionComponent';
import { Slots } from '../Basics/Slots';

// child prop
// "slots"

export const BasicsDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2>Komponens alapok</h2>
      <hr />
      <h3>SimplestFunctionComponent:</h3>
      <SimplestFunctionComponent />
      <br />
      <FunctionComponentWithProps name={'kecske'} />
      <br />
      <FCInlineAndDeconstruction name={'david'} age={25} />
      <h3>Kondicionalis rendereles</h3>
      <button onClick={() => setChecked(!checked)}>toggle</button>
      <ConditionalRendering checked={checked} />
      <h3>Listak</h3>
      List:
      <List />
      List2:
      <List2 />
      <h3>Esemenyek kezelese</h3>
      <ReceiveEvent />
      <h3>Gyermek prop</h3>
      <ChildrenProp>
        <b>alma</b>
      </ChildrenProp>
      <ChildrenProp>
        <button>alma</button>
      </ChildrenProp>
      <Slots title={<b>Best title</b>} body={<code>hacker stuff</code>} />
    </div>
  );
};
