
import { Route, Routes } from 'react-router-dom'
import BillingPage from '../billing/pages/BillingPage'
import AuthRoutes from '../auth/routes/AuthRoutes'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<BillingPage/>} />
        <Route path='/auth/*' element={<AuthRoutes/>} />
    </Routes>
  )
}

export default AppRouter