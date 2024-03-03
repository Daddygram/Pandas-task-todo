import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import styles from "./addTodo.module.scss"
import { useContext, useState } from "react"
import { MyContext } from "@/lib/context"

export default function AddTodo() {

  const [value, setvalue] = useState("")
  const { data, setData } = useContext(MyContext)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = value
    if (!title) return alert('Please enter a task')
    else{
      setData([...data, { userId: Math.random(), id: Math.random(), completed: false, title: title }])
      setvalue("")
    }
  }

  return (
    <div className={styles.container}>
      <Card className={styles.CardWithFormCard}>
        <CardHeader>
          <CardTitle>Create Todo</CardTitle>
          <CardDescription>Create your new todo.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className={styles.CardWithFormGrid}>
              <div className={styles.CardWithFormCardHeader}>
                <Label htmlFor="name">Title</Label>
                <Input 
                id="name" 
                placeholder="title for your todo" 
                value={value} 
                onChange={onChange}/>
              </div>
              <div className={styles.CardWithFormCardHeader}>
              </div>
            </div>
            <Button type="button" onClick={()=>setvalue("")}>Cancel</Button>
            <Button type="submit">Add Task</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
