import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbarContainer}>
          <h1 className={styles.logo}>TravelExplorer</h1>
          <nav>
            <Link to="#">Home</Link>
            <Link to="#">Destinations</Link>
            <Link to="#">Packages</Link>
            <Link to="#">Contact</Link>
          </nav>
          <div className={styles.authButtons}>
            <button className={styles.btnPrimary}>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
            </button>
            <button className={styles.btnSecondary}>
              <Link to="/signup" style={{ color: "#4f46e5", textDecoration: "none" }}>Sign Up</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
