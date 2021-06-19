import React from 'react';
import Input from './Input';

function RightSideInputs() {
  return (
    <div className="side-inputs" id="right-inputs">
      <Input sideBorder="topRight" />
      <Input sideBorder="bottomRight" />
    </div>
  );
}

export default RightSideInputs;
