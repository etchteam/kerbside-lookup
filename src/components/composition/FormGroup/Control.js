import { h } from 'preact';

export default function Control({ children }) {
  return (
    <div className="klw-form-group__control">
      {children}
    </div>
  );
}

Control.propTypes = {
  children: node.isRequired,
};
