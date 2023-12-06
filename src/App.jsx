import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout'
import Landing from './Pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
