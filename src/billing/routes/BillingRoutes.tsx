import { Navigate, Route, Routes } from "react-router-dom"
import BillingPage from "../pages/BillingPage"
import BillingSearch from "../components/BillingSearch"


const BillingRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<BillingPage/>} />
        <Route path="/search" element={<BillingSearch/>} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default BillingRoutes