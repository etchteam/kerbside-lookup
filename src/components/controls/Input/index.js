import { h } from 'preact';
import PropTypes from 'prop-types';

export default function Input({ state, ...props }) {
  return (
    <input
      className={`klw-input klw-input--${state}`}
      {...props}
    />
  );
}

Input.propTypes = {
  state: PropTypes.string
};

Input.defaultProps = {
  state: 'default'
};
