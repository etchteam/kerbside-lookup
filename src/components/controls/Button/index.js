import PropTypes from 'prop-types';

export default function Button({ children, ...props }) {
  return (
    <button className="klw-button" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
