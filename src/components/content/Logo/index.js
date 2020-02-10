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
        src="/assets/images/logo.svg"
        alt="RecycleNow logo"
        width="400"
        height="105"
      />
    </a>
  );
}
