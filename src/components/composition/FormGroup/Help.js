import PropTypes from 'prop-types';

export default function Help({ children, state, ...props }) {
  return (
    <div
      className={`klw-form-group__help klw-form-group__help--${state}`}
      {...props}
    >
      {children}
    </div>
  );
}

Help.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.string,
};

Help.defaultProps = {
  state: 'danger',
};
