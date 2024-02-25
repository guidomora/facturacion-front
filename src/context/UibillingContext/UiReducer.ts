import { InitialStateModal } from "./UiProvider";

type ActionModal =
    | { type: 'openModal' }
    | { type: 'closeModal' }



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
        default:
            return state
    }
}