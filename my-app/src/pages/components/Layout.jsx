import Anchor from "./Anchor";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        Nav
        {/* {navData.map((e) => {
          return (
            <Anchor key={e.id} href={"/dogs/" + e.slug}>
              {e.title}
            </Anchor>
          );
        })} */}
      </nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
