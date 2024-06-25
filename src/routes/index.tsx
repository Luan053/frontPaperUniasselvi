import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    }
  ])

  return router
}
