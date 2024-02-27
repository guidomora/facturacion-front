import { ReactNode, useReducer } from 'react';
import { UpdateContext } from './UpdateModalContext';
import { updateReducer } from './UpdateReducer';


const initialStateUpdate: InitialStateModalUpdate = {
    modalUpdateOpen: false,
}

export interface InitialStateModalUpdate {
    modalUpdateOpen: boolean;
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

    return (
        <UpdateContext.Provider value={{modalUpdate, openModal, closeModal}}>
        {children}
        </UpdateContext.Provider>   
    );
};