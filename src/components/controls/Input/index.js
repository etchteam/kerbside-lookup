import { h } from 'preact';

export default function Input({ ...props }) {
  return (
    <input
      className="klw-input"
      {...props}
    />
  );
}
