import Layout from "../components/Layout";
import styles from "../styles/home.module.scss"; // CSS module for specific page styles

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Welcome to the Homepage!</h1>
      <p>This is a page styled with global and local styles.</p>
    </div>
  );
}
