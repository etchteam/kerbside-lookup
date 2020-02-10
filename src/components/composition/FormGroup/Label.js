import { h } from 'preact';
import { node } from 'prop-types';

export default function Label({ children, ...props }) {
  return (
    <label className="klw-form-group__label" {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: node.isRequired,
};
