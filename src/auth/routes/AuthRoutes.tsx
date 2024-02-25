import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"


const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="register" element={<p style={{color:'red'}}>Register Page</p>} />
        
        {/* Redirects to login */}
        <Route path="/*" element={<Navigate to="/auth/login"/> }/> 
    </Routes>
  )
}

export default AuthRoutes