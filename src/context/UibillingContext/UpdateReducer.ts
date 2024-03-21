import { InitialStateModalUpdate, UpdateIdBill } from "./UpdateProvider"


type ActionModal =
    | { type: 'openUpdateModal' }
    | { type: 'closeUpdateModal' }
    | { type: 'getId', payload: UpdateIdBill }



export const updateReducer = (state: InitialStateModalUpdate, action: ActionModal) => {
    switch (action.type) {
        case 'openUpdateModal':
            return {
                ...state,
                modalUpdateOpen: true
            }
        case 'closeUpdateModal':
            return {
                ...state,
                modalUpdateOpen: false
            }
        case 'getId':
            return {
                ...state,
                updateId: action.payload,
            }
        default:
            return state
    }
}