import Anchor from "./Anchor";

export default function Layout({ children }) {
  return (
    <>
      <nav>Nav</nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
