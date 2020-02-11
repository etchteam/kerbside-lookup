import { h } from 'preact';
import { node } from 'prop-types';

export default function Control({ children }) {
  return (
    <div className="klw-form-group__control">
      {children}
    </div>
  );
}

Control.propTypes = {
  children: node.isRequired
};
