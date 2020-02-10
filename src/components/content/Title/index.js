import { h } from 'preact';
import { node, string } from 'prop-types';

export default function Title({ children, as, state, ...props }) {
  const El = as;
  return (
    <El className={`klw-title klw-title--${state}`} {...props}>
      {children}
    </El>
  );
}

Title.propTypes = {
  as: string,
  children: node.isRequired,
  state: string,
};

Title.defaultProps = {
  as: 'h1',
  state: 'default'
};
