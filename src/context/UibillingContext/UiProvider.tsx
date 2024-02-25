import { ReactNode, useReducer } from 'react';
import {  UiContext } from './UiContext';
import { uiReducer } from './UiReducer';

const initialState: InitialStateModal = {
    modalOpen: false,
}

export interface InitialStateModal {
    modalOpen: boolean;
}

interface UiContextProps {
    children: ReactNode;
}


export const UiProvider = ({children }:UiContextProps) => {
    const [modalState, dispatch] = useReducer(uiReducer, initialState)

    const openModal = () => {
        dispatch({type:'openModal'})
    }

    const closeModal = () => {
        dispatch({type:'closeModal'})
    }

    return (
        <UiContext.Provider value={{modalState, openModal, closeModal}}>
        {children}
        </UiContext.Provider>   
    );
};