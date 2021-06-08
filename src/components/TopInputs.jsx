import React from 'react';
import Input from './Input';

function TopInputs() {
  return (
    <div className="row d-flex w-100 justify-content-around" id="top-input">
      <Input sideBorder="topLeft" />
      <Input sideBorder="topRight" />
    </div>
  );
}

export default TopInputs;
