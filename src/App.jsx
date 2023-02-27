import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import UsersDetailPage from './pages/UsersDetailPage';
import CreatedProjectPage from './pages/CreatedProjectPage';
import PledgePage from './pages/PledgePage';
import LogoutPage from './pages/LogoutPage';
import StretchGoalPage from './pages/StretchGoalPage';


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
      {
        path: '/project',
        element: <CreatedProjectPage />,
      },
      {
        path: '/pledges',
        element: <PledgePage />,
      },
      {
        path: '/logout',
        element: <LogoutPage />,
      },
      {
        path: '/stretch_goals',
        element: <StretchGoalPage />,
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
