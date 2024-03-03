import { Link } from 'react-router-dom';
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <span className={styles.logo}>Todos</span>
        <ul className={styles.navLinkUl}>
            <li className={styles.navLinkLi}>
                <Link to={"/"} className={styles.navLinks}>Home</Link>
            </li>
            <li className={styles.navLinkLi}>
                <Link to={"/add-todo"} className={styles.navLinks}>Add ToDo</Link>
            </li>
            <li className={styles.navLinkLi}>
                <Link to={"/todo-list"} className={styles.navLinks}>ToDo List</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
