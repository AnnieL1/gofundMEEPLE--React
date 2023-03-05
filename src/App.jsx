import React, {useState, useContext} from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import EditProjectForm from './pages/EditProjectPage';
// import DeleteFunction from './components/DeleteProject';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import UsersDetailPage from './pages/UsersDetailPage';
import CreatedProjectPage from './pages/CreatedProjectPage';
import PledgePage from './pages/PledgePage';
import LogoutPage from './pages/LogoutPage';
import StretchGoalForm from './components/StretchGoalForm';
import StretchGoalPage from './pages/StretchGoalPage';
import InstructionsPage from './pages/InstructionsPage';
import CreateNewUser from './components/CreateNewUserForm';
import ErrorPage from './pages/ErrorPage';


// import UsernameContext from './components/Username';


const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}
//PAGES/URLS
// put something in router to make it call the Error404 page when there is a 404 error
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
        path: '/projects/:id',
        element: <EditProjectForm />,
      },
      {
        path: '/instructions-on-how-to-use-website',
        element: <InstructionsPage />,
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
        path: '/stretch_goals/',
        element: <StretchGoalForm />,
      },
      {
        path: '/stretch_goals/:id/',
        element: <StretchGoalPage/>,
      },
      {
        path: '/create-new-user',
        element: <CreateNewUser/>,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ]
  }
])

// const [value, setValue] = useState("Welcome");

// const usernameValue = useMemo(() => ({value, setValue}), [value, setValue]);

function App() {
  return(
    // <UseContext.Provider value="test"></UseContext.Provider>,
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App