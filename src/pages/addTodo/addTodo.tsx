import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import styles from "./addTodo.module.scss"

export default function addTodo() {
  return (
    <Card className={styles.CardWithFormCard}>
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Create your new todo.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className={styles.CardWithFormGrid}>
            <div className={styles.CardWithFormCardHeader}>
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="title for your todo" />
            </div>
            <div className={styles.CardWithFormCardHeader}>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={styles.CardWithFormCardFooter}>
        <Button>Cancel</Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  )
}
