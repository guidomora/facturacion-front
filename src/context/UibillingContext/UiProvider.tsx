import { ReactNode, useReducer } from 'react';
import {  UiContext } from './UiContext';
import { uiReducer } from './UiReducer';

const initialState: InitialStateModal = {
    modalOpen: false,
    english: true
}

export interface InitialStateModal {
    modalOpen: boolean;
    english: boolean;
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

    const changeLanguage = (state:boolean) => {
        dispatch({type:'changeLanguage', payload:state})
    }

    return (
        <UiContext.Provider value={{modalState, openModal, closeModal, changeLanguage}}>
        {children}
        </UiContext.Provider>   
    );
};