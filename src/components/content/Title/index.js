import { h } from 'preact';
import PropTypes from 'prop-types';

export default function Title({ children, as, state, ...props }) {
  const El = as;
  return (
    <El className={`klw-title klw-title--${state}`} {...props}>
      {children}
    </El>
  );
}

Title.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  state: PropTypes.string
};

Title.defaultProps = {
  as: 'h1',
  state: 'default'
};
