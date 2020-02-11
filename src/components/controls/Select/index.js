import { h } from 'preact';
import { node, string } from 'prop-types';

export default function Select({ children, state, ...props }) {
  return (
    <div className={`klw-select klw-select--${state}`}>
      <select
        className="klw-select__select"
        {...props}
      >
        {children}
      </select>
      <div className="klw-select__suffix">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

Select.propTypes = {
  children: node.isRequired,
  state: string
};

Select.defaultProps = {
  state: 'default'
};
