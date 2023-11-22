import menuLogo from '../assets/menu.svg'
import logo from '../assets/logo.svg'

import styles from './Header.module.css'

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <p>Dev.Garcia</p>
      </div>
      <img className={styles.menu} src={menuLogo} alt="menu" />
    </header>
  )
}