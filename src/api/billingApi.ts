import axios from "axios";



const billingApi = axios.create({
    baseURL:'https://factruracion-back-production.up.railway.app/billing'
})

export default billingApi;