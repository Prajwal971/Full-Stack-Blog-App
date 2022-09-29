import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", //Home page
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <div><Single /></div>
      },
      {
        path: "/Write",
        element: <div><Write /></div>
      },
    ]
  },
  {
    path: "/register", //Register page
    element: <div><Register /></div>
  },
  {
    path: "/login",
    element: <div><Login /></div>
  },
  {
    path: "/Single",
    element: <div><Single /></div>
  },
  {
    path: "/Write",
    element: <div><Write /></div>
  },
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
