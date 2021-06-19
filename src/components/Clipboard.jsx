import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Clipboard({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}) {
  function updateClipboardInput() {
    const clipboardInput = document.getElementById('clipboardInput');
    clipboardInput.value = `border-radius: ${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomRightRadius} ${borderBottomLeftRadius};`;
  }

  function copyCss() {
    const clipboardInput = document.getElementById('clipboardInput');
    updateClipboardInput();
    clipboardInput.select();
    document.execCommand('copy');
  }

  return (
    <div id="Clipboard">
      <div className="component-container" id="clipboard-container">
        <input type="text" name="clipboardInput" id="clipboardInput" />
        <button type="button" id="copyCSS" onClick={() => copyCss()}>
          Gerar e Copiar CSS
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  borderRadiusReducer: { topLeft, topRight, bottomLeft, bottomRight },
}) => ({
  borderTopLeftRadius: `${topLeft}px`,
  borderTopRightRadius: `${topRight}px`,
  borderBottomLeftRadius: `${bottomLeft}px`,
  borderBottomRightRadius: `${bottomRight}px`,
});

export default connect(mapStateToProps)(Clipboard);

Clipboard.propTypes = {
  borderTopLeftRadius: PropTypes.string.isRequired,
  borderTopRightRadius: PropTypes.string.isRequired,
  borderBottomLeftRadius: PropTypes.string.isRequired,
  borderBottomRightRadius: PropTypes.string.isRequired,
};
