import { useContext } from 'react';
import styles from './todoList.module.scss';

import Tasks from '@/components/tasks/tasks';
import { MyContext } from '@/lib/context';

const TodoList = () => {
  const { data } = useContext(MyContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>Your Todo List:</h2>
        <div className={styles.taskContainer}>
          <Tasks data={data} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
