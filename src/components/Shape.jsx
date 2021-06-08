import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Shape({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}) {
  return (
    <div
      className="row my-4"
      id="shape"
      style={{
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
    />
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

export default connect(mapStateToProps)(Shape);

Shape.propTypes = {
  borderTopLeftRadius: PropTypes.string.isRequired,
  borderTopRightRadius: PropTypes.string.isRequired,
  borderBottomLeftRadius: PropTypes.string.isRequired,
  borderBottomRightRadius: PropTypes.string.isRequired,
};
