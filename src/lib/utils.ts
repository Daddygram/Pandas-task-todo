import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Task } from "@/components/tasks/columns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getData(): Promise<Task[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data)
    return data.slice(0, 10) as Task[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
