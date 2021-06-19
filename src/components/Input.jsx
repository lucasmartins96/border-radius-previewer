import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeSideBorder from '../redux/actions';

function Input({ sideBorder, borderRadius, updateBorderRadius }) {
  return (
    <input
      type="text"
      name={sideBorder}
      value={borderRadius[sideBorder]}
      onChange={({ target: { name, value } }) =>
        updateBorderRadius(name, value)
      }
    />
  );
}

const mapStateToProps = ({ borderRadiusReducer }) => ({
  borderRadius: borderRadiusReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updateBorderRadius: (side, value) => dispatch(changeSideBorder(side, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  sideBorder: PropTypes.string,
  borderRadius: PropTypes.objectOf(PropTypes.string).isRequired,
  updateBorderRadius: PropTypes.func.isRequired,
};

Input.defaultProps = {
  sideBorder: 'whatever side',
};
