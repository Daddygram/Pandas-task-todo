import { useContext, useEffect } from 'react';
import styles from './todoList.module.scss';
import { getData } from '@/lib/utils';
import Tasks from '@/components/tasks/tasks';
import { MyContext } from '@/lib/context';

const TodoList = () => {
  const {data, setData} = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData])

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
