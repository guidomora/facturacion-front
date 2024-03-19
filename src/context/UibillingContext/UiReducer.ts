import { InitialStateModal } from "./UiProvider";

type ActionModal =
    | { type: 'openModal' }
    | { type: 'closeModal' }
    | { type: 'changeLanguage', payload: boolean}




export const uiReducer = (state: InitialStateModal, action: ActionModal) => {
    switch (action.type) {
        case 'openModal':
            return {
                ...state,
                modalOpen: true
            }
        case 'closeModal':
            return {
                ...state,
                modalOpen: false
            }
        case 'changeLanguage':
            return {
                ...state,
                english: action.payload
            }
        default:
            return state
    }
}