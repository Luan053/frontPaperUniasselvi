import { RouterProvider } from 'react-router-dom'
import Routes from './routes'

export function App() {
  return (
    <>
      <RouterProvider router={Routes()} />
    </>
  )
}
