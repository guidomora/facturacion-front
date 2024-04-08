import { ReactNode, useReducer } from "react";
import { DataContext } from "./DataContext";
import { dataReducer } from "./DataReducer";
import billingApi from "../../api/billingApi";
import { FormState } from "../../hooks/useForm";

export interface BillObject {
    limit: number;
    total: number;
    next: string | null;
    previous: string | null;
    sortedBillings: Bill[];
}


export interface Bill {
    date: string;
    description: string;
    id: string;
    price: number;
    paid: boolean | string;
}


export interface DbState {
    limit: number;
    total: number;
    next: string | null;
    previous: string | null;
    bills: Bill[];
    payments: Payments[];
    secondPayments: Payments[];
}

export interface Payments {
    month: string;
    total: number;
}

const initialState: DbState = {
    limit: 0,
    total: 0,
    next: null,
    previous: null,
    bills: [{
        date: '',
        description: '',
        id: '',
        price: 0,
        paid: false,
    }],
    payments: [{
        month: '',
        total: 0
    }],
    secondPayments: [{
        month: '',
        total: 0
    }]
}


interface DataContextProps {
    children: ReactNode;
}

export const DataProvider = ({ children }: DataContextProps) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    // Bring Data
    const getData = async (page?:number) => {
        try {
            const response = await billingApi.get(`/?page=${page}&limit=10`);
            const data = response.data;  
            dispatch({ type: 'getData', payload: data });
        } catch (error) {
            console.error("Error al obtener datos de la API", error);
        }
    }

    // finder
    const getBillsByIdDescriptionPrice = async (searchParam: string | number) => {
        try {
            const response = await billingApi.get(`/search/${searchParam}`);
            const data = response.data;
            dispatch({ type: 'getBillsByIdDescriptionPrice', payload: data });
        } catch (error) {
            console.error("Error al obtener datos de la API", error);
        }

    }

    const createBill = async (bill: FormState) => {
        try {
            const response = await billingApi.post('/', bill);
            const data = response.data;
            console.log('Bill created', data);
            dispatch({ type: 'createBill', payload: data });
        } catch (error) {
            console.error("Error creating a new bill", error);
        }
    }

    const deleteBill = async (id: string) => {
        try {
            await billingApi.delete(`/${id}`);
            dispatch({ type: 'deleteBill', payload: id });
        } catch (error) {
            console.error("Error deleting a bill", error);
        }

    }

    const updateBill = async (id: string, bill: FormState) => {
        try {
            const response = await billingApi.put(`/${id}`, bill);
            const data = response.data;
            console.log('Bill updated', data);
            dispatch({ type: 'updateBill', payload: data });
        } catch (error) {
            console.error("Error updating a bill", error);
        }
    }

    const getPaymentByYear = async (year: number) => {

        try {
            const response = await billingApi.get(`/year/${year}`);
            const data = response.data;
            dispatch({ type: 'getPaymentByYear', payload: data });
        } catch (error) {
            console.error("Error al obtener datos de la API", error);
        }
    }

    const getTotalByIdAndYear = async (id: string, year: number) => {
        try {
            const response = await billingApi.get(`/personId/${id}/${year}`);
            const data = response.data;
            dispatch({ type: 'getTotalByIdAndYear', payload: data });
        } catch (error) {
            console.error("Error al obtener datos de la API", error);
        }
    }

    return (
        <DataContext.Provider value={{
            ...state,
            getData,
            createBill,
            deleteBill,
            updateBill,
            getBillsByIdDescriptionPrice,
            getPaymentByYear,
            getTotalByIdAndYear
        }}>
            {children}
        </DataContext.Provider>
    )
}