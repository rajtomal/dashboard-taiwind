import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import User from './Pages/UserPage.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/user', element: <User /> },
]);
const Root = () => {
  return (
    <React.StrictMode>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
