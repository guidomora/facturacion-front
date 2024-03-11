import { Navigate, Route, Routes } from "react-router-dom"
import BillingPage from "../pages/BillingPage"
import BillingSearch from "../components/BillingSearch"
import BillingCharts from "../components/BillingCharts"


const BillingRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<BillingPage/>} />
        <Route path="/search" element={<BillingSearch/>} />
        <Route path="/charts" element={<BillingCharts/>} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default BillingRoutes