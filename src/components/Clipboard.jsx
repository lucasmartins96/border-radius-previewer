import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const clipboardInput = document.getElementById('clipboardInput');

function Clipboard({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}) {
  function updateClipboardInput() {
    clipboardInput.value = `border-radius: ${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomRightRadius} ${borderBottomLeftRadius};`;
  }

  function copyCss() {
    updateClipboardInput();
    clipboardInput.select();
    document.execCommand("copy");
  }

  return (
    <div className="row d-flex flex-column justify-content-between align-items-center my-4 w-50">
      <input
        className="form-control form-control-lg w-100"
        type="text"
        name="clipboardInput"
        id="clipboardInput"
      />
      <button
        type="button"
        id="copyCSS"
        className="btn btn-lg my-2"
        onClick={() => copyCss()}
      >
        Gerar e Copiar CSS
      </button>
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
