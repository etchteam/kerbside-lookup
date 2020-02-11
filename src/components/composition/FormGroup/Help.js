import { h } from 'preact';
import { node, string } from 'prop-types';

export default function Help({ children, state, ...props }) {
  return (
    <div className={`klw-form-group__help klw-form-group__help--${state}`} {...props}>
      {children}
    </div>
  );
}

Help.propTypes = {
  children: node.isRequired,
  state: string
};

Help.defaultProps = {
  state: 'danger'
};
