import React from 'react';
import App from './App.tsx';
import '@/styles/main.scss';
import Navbar from './components/navbar/navbar.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTodo from './pages/addTodo/addTodo.tsx';
import TodoList from './pages/todoList/todoList.tsx';
import { MyProvider } from './lib/context.tsx';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
