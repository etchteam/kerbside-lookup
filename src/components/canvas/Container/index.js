import { h } from 'preact';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="klw-container">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};
