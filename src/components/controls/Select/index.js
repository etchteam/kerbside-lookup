import { h } from 'preact';

export default function Select({ children, ...props }) {
  return (
    <select
      className="klw-select"
      {...props}
    >
      {children}
    </select>
  );
}
