import { h } from 'preact';
import { node } from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="klw-container">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: node.isRequired,
};
