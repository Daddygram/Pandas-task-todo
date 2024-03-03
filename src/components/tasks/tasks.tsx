import { Task } from "@/lib/utils";
import { Button } from "../ui/button";
import styles from "./tasks.module.scss"


interface TasksProps {
    data: Task[];
  }

  const Tasks: React.FC<TasksProps> = ({ data }) => {

  return (
    <>
        {data.map((task) => (
            <div className={styles.container} key={task.id}>
                <p>{task.title}</p>
                <div className={styles.buttons}>
                    <Button id={task.id.toString()}>Edit</Button>
                    <Button id={task.id.toString()}>Delete</Button>
                </div>
            </div>
        ))}
    </>
  )
}

export default Tasks