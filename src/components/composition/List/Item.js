import PropTypes from 'prop-types';

export default function Item({ children }) {
  return <li className="klw-list__item">{children}</li>;
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
};
