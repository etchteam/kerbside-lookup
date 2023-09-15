import PropTypes from 'prop-types';

import Item from './Item';

export default function List({ children }) {
  return <ul className="klw-list">{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};

List.Item = Item;
