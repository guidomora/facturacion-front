import { ReactNode, useReducer } from 'react';
import { UpdateContext } from './UpdateModalContext';
import { updateReducer } from './UpdateReducer';


const initialStateUpdate: InitialStateModalUpdate = {
    modalUpdateOpen: false,
    updateId:''
}

export interface InitialStateModalUpdate {
    modalUpdateOpen: boolean;
    updateId: string;
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

    const getId = (id: string) => {
        dispatch({type:'getId', payload: id})
    }

    return (
        <UpdateContext.Provider value={{modalUpdate, getId, openModal, closeModal}}>
        {children}
        </UpdateContext.Provider>   
    );
};