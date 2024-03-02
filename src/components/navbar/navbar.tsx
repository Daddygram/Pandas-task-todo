import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <span className={styles.logo}>Todos</span>
        <ul className={styles.navLinkUl}>
            <li className={styles.navLinks}>Home</li>
            <li className={styles.navLinks}>Add ToDo</li>
            <li className={styles.navLinks}>ToDo List</li>
        </ul>
    </div>
  )
}

export default Navbar