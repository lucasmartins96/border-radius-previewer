import React from 'react';
import Input from './Input';

function LeftSideInputs() {
  return (
    <div className="side-inputs" id="left-inputs">
      <Input sideBorder="topLeft" />
      <Input sideBorder="bottomLeft" />
    </div>
  );
}

export default LeftSideInputs;
