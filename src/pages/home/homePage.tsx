import { Button } from "@/components/ui/button"
import styles from "./homePage.module.scss"


const HomePage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Welcome Back, Time to do your tasks my brother!</h1>
        <Button>See your tasks</Button>
    </div>
  )
}

export default HomePage