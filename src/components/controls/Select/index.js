import { h } from 'preact';
import PropTypes from 'prop-types';

import Spinner from '../../content/Spinner';

export default function Select({ children, state, loading, ...props }) {
  return (
    <div className={`klw-select klw-select--${state}`}>
      <select
        className="klw-select__select"
        {...props}
      >
        {children}
      </select>
      <div className="klw-select__suffix">
        {loading ? (
          <Spinner />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </div>
    </div>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.string,
  loading: PropTypes.bool
};

Select.defaultProps = {
  state: 'default',
  loading: false
};
