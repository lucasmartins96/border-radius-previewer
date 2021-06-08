import React from 'react';
import BottomInputs from './BottomInputs';
import Clipboard from './Clipboard';
import Shape from './Shape';
import TopInputs from './TopInputs';

function ShapeArea() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className="container d-flex flex-column justify-content-center align-items-center h-100"
        id="shape-container"
      >
        <TopInputs />
        <Shape />
        <BottomInputs />
        <Clipboard />
      </div>
    </div>
  );
}

export default ShapeArea;
