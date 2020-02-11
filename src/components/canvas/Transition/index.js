import { h } from 'preact';
import { node, bool } from 'prop-types';

export default function Transition({ children, enter, leave }) {
  let cx = 'klw-transition';

  if (enter) cx += ' klw-transition--enter';
  if (leave) cx += ' klw-transition--leave';
  return (
    <div className={cx}>
      {children}
    </div>
  );
}

Transition.propTypes = {
  children: node.isRequired,
  enter: bool,
  leave: bool,
};

Transition.defaultProps = {
  enter: false,
  leave: false,
};
