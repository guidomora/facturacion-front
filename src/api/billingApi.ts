import axios from "axios";



const billingApi = axios.create({
    baseURL:'http://localhost:3000/billing'
})

export default billingApi;