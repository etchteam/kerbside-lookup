import { h } from 'preact';
import { node } from 'prop-types';

export default function Item({ children, ...props }) {
  return (
    <div className="klw-grid__item" {...props}>
      {children}
    </div>
  );
}

Item.propTypes = {
  children: node.isRequired,
};
