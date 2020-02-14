import { h } from 'preact';
import PropTypes from 'prop-types';

export default function Control({ children }) {
  return (
    <div className="klw-form-group__control">
      {children}
    </div>
  );
}

Control.propTypes = {
  children: PropTypes.node.isRequired
};
