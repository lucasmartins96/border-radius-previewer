import React from 'react';
import Clipboard from './Clipboard';
import Describe from './Describe';
import Shape from './Shape';
import LeftSideInputs from './LeftSideInputs';
import RightSideInputs from './RightSideInputs';

function Main() {
  return (
    <main className="container">
      <Describe />
      <section id="content" className="component-container">
        <div id="shape-container">
          <LeftSideInputs />
          <Shape />
          <RightSideInputs />
        </div>
        <Clipboard />
      </section>
      
    </main>
  );
}

export default Main;
