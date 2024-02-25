import { Navigate, Route, Routes } from "react-router-dom"
import BillingPage from "../pages/BillingPage"


const BillingRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<BillingPage/>} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default BillingRoutes