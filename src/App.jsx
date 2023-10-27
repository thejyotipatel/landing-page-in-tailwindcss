import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout'
import Landing from './Pages/Landing'
import Detail from './Pages/Detail'
import Error from './Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
