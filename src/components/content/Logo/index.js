import { h } from 'preact';

export default function Logo() {
  return (
    <a
      className="klw-logo"
      href="https://recyclenow.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="klw-logo__img"
        src="/assets/images/logo.jpg"
        alt="RecycleNow logo"
        width="668"
        height="291"
      />
    </a>
  );
}
