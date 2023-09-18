import { h } from 'preact';
import PropTypes from 'prop-types';

export default function Label({ children, ...props }) {
  return (
    <label className="klw-form-group__label" {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
