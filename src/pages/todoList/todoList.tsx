import { useEffect, useState } from 'react';
import styles from './todoList.module.scss';
import { DataTable } from '@/components/tasks/dataTable';
import { Task, columns } from "@/components/tasks/columns";
import { getData } from '@/lib/utils';

const TodoList = () => {
  const [data, setData] = useState<Task[]>([]);

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
  }, [])

  return (
    <div className={styles.container}>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TodoList;
