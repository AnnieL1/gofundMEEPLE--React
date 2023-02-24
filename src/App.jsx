import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import UsersDetailPage from './pages/UsersDetailPage';

const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}
//PAGES/URLS
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/project/:id',
        element: <ProjectPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/users/:id',
        element: <UsersDetailPage />,
      },
    ]
  }
])

function App() {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
