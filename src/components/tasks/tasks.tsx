import { Task } from "@/lib/utils";
import { Button } from "../ui/button";
import styles from "./tasks.module.scss"
import { useContext, useState } from "react";
import { MyContext } from "@/lib/context";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

interface TasksProps {
    data: Task[];
  }

  const Tasks: React.FC<TasksProps> = ({ data }) => {
    const { setData } = useContext(MyContext)
    const [value, setvalue] = useState("")
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return alert("Please enter a title");
    
        if (selectedTaskId !== null) {
          const updatedData = data.map((task) =>
            task.id === selectedTaskId ? { ...task, title: value } : task
          );
          setData(updatedData);
        }
        setvalue("");
        setSelectedTaskId(null);
    }
    const openEditDialog = (taskId: number) => {
        setSelectedTaskId(taskId);
        const task = data.find((task) => task.id === taskId);
        if (task) {
          setvalue(task.title);
        }
    }


    const deleteTask = ( id: number ) => {
        const updatedData = data.filter(task => task.id !== id)
        setData(updatedData)
    }

  return (
    <>
        {data.map((task) => (
            <div className={styles.container} key={task.id}>
                <p>{task.title}</p>
                <div className={styles.buttons}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button onClick={() => openEditDialog(task.id)}>Edit</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Edit ToDo</DialogTitle>
                            <DialogDescription>
                                Make changes to your todo here. Click save when you're done.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <form onSubmit={onSubmit} className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Title
                                </Label>
                                <Input
                                id="name"
                                defaultValue={task.title}
                                className="col-span-3"
                                value={value}
                                onChange={onChange}
                                />
                                <Button type="submit">Save changes</Button>
                            </form>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button onClick={() => openEditDialog(task.id)}>Delete</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                                This will permamently remove your todo.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <form className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Title
                                </Label>
                                <p>{`${task.title}`}</p>
                                <Button type="submit" onClick={() => deleteTask(task.id)}>Delete</Button>
                            </form>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        ))}
    </>
  )
}

export default Tasks