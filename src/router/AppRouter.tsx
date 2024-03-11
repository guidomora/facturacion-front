
import { Route, Routes } from 'react-router-dom'
import BillingPage from '../billing/pages/BillingPage'
import AuthRoutes from '../auth/routes/AuthRoutes'
import BillingSearch from '../billing/components/BillingSearch'
import BillingCharts from '../billing/components/BillingCharts'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<BillingPage/>} />
        <Route path='/search' element={<BillingSearch/>} />
        <Route path='/charts' element={<BillingCharts/>} />
        <Route path='/auth/*' element={<AuthRoutes/>} />
    </Routes>
  )
}

export default AppRouter