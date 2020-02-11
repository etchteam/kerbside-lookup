import { h } from 'preact';
import { node } from 'prop-types';

export default function Button({ children, ...props }) {
  return (
    <button className="klw-button" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node.isRequired
};
