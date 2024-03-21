import { ReactNode, useReducer } from 'react';
import { UpdateContext } from './UpdateModalContext';
import { updateReducer } from './UpdateReducer';


const initialStateUpdate: InitialStateModalUpdate = {
    modalUpdateOpen: false,
    updateId:{
        id: '',
        date: '',
        description: '',
        price: 0,
        paid: ''
    },
}

export interface InitialStateModalUpdate {
    modalUpdateOpen: boolean;
    updateId: UpdateIdBill;
}

export interface UpdateIdBill {
    id: string;
    date: string;
    description: string;
    price: number;
    paid: string | boolean;
}

interface UpdateContextProps {
    children: ReactNode;
}


export const UiProviderUpdate = ({children }:UpdateContextProps) => {
    const [modalUpdate, dispatch] = useReducer(updateReducer, initialStateUpdate)
    

    const openModal = () => {
        dispatch({type:'openUpdateModal'})
    }

    const closeModal = () => {
        dispatch({type:'closeUpdateModal'})
    }

    const getId = (updateId:UpdateIdBill) => {
        dispatch({type:'getId', payload:updateId})
    }

    return (
        <UpdateContext.Provider value={{modalUpdate, getId, openModal, closeModal}}>
        {children}
        </UpdateContext.Provider>   
    );
};