import { ReactNode, useReducer } from "react";
import { DataContext } from "./DataContext";
import { dataReducer } from "./DataReducer";
import billingApi from "../../api/billingApi";
import { FormState } from "../../hooks/useForm";

export interface Bill {
    date: string;
    description: string;
    id: string;
    price: number;
    paid: boolean | string;
}


export interface DbState {
    bills: Bill[];
}

const initialState: DbState = {
    bills: [{
        date: '',
        description: '',
        id: '',
        price: 0,
        paid: false,
    }]
}


interface DataContextProps {
    children: ReactNode;
}

export const DataProvider = ({ children }: DataContextProps) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    // Bring Data
    const getData = async () => {

        try {
            const response = await billingApi.get('/');
            const data = response.data;
            // const event = eventsToDateEvents(data.date)
            // console.log(event)
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

    return (
        <DataContext.Provider value={{ ...state, getData, createBill, deleteBill, updateBill, getBillsByIdDescriptionPrice }}>
            {children}
        </DataContext.Provider>
    )
}