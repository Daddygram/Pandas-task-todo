import { Link } from "react-router-dom"
import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <span className={styles.logo}>Todos</span>
        <ul className={styles.navLinkUl}>
            <a href={"/"} className={styles.navLinks}>Home</a>
            <a href={"/add-todo"} className={styles.navLinks}>Add ToDo</a>
            <a href={"/todo-list"} className={styles.navLinks}>ToDo List</a>
        </ul>
    </div>
  )
}

export default Navbar