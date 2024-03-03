import { Button } from "@/components/ui/button"
import styles from "./homePage.module.scss"
import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Welcome Back, Time to do your tasks my brother!</h1>
        <Link to="/todo-list"><Button>See your tasks</Button></Link>
    </div>
  )
}

export default HomePage