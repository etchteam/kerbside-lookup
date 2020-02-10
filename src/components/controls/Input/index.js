import { h } from 'preact';
import { string } from 'prop-types';

export default function Input({ state, ...props }) {
  return (
    <input
      className={`klw-input klw-input--${state}`}
      {...props}
    />
  );
}

Input.propTypes = {
  state: string,
};

Input.defaultProps = {
  state: 'default',
};
