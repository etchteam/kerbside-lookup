import { h } from 'preact';
import { node, string } from 'prop-types';

export default function Title({ children, as, ...props }) {
  const El = as;
  return (
    <El className="klw-title" {...props}>
      {children}
    </El>
  );
}

Title.propTypes = {
  as: string,
  children: node.isRequired,
};

Title.defaultProps = {
  as: 'h1',
};
