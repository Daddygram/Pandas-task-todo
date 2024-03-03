import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/main.scss'
import Navbar from './components/navbar/navbar.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTodo from './pages/addTodo/addTodo.tsx'
import TodoList from './pages/todoList/todoList.tsx'
import { MyProvider } from './lib/context.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-todo",
    element: <AddTodo />,
  },
  {
    path: "/todo-list",
    element: <TodoList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  </React.StrictMode>,
)
