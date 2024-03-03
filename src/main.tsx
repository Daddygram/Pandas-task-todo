/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react';
import '@/styles/main.scss';
import Navbar from './components/navbar/navbar.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyProvider } from './lib/context.tsx';
import { createRoot } from 'react-dom/client';
import Loader from './components/ui/loader.tsx';
import ErrorBoundary from './lib/errorBoundary.tsx';

const root = createRoot(document.getElementById('root')!);

const App = lazy(() => import("./App.tsx"))
const AddTodo = lazy(() => import("./pages/addTodo/addTodo.tsx"))
const TodoList = lazy(() => import('./pages/todoList/todoList.tsx'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyProvider>
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback ={<Loader />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/add-todo" element={<AddTodo />} />
              <Route path="/todo-list" element={<TodoList />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
