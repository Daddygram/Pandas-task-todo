import { ColumnDef } from "@tanstack/react-table"

export type Task = {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  export const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "completed",
      header: "Completed",
    },
  ]
  