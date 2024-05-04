import axios from "axios";

// http://localhost:3000/billing
// 

const billingApi = axios.create({
    baseURL:'https://factruracion-back-production.up.railway.app/billing'
})

export default billingApi;