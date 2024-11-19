import Header from "../pages/header";
import Footer from "../pages/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>{" "}
      {/* Wrap children in <main> for semantic structure */}
      <Footer /> {/* Add Footer component */}
    </>
  );
}
