import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'
export function Header() {
    return (
        <header className={styles.header}>
          <h1>
            <img src={igniteLogo} alt="Ignite Logo" /> Ignite Feed
          </h1>
        </header>
    );
}