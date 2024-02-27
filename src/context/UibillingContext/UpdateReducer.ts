import { InitialStateModalUpdate } from "./UpdateProvider"


type ActionModal =
    | { type: 'openUpdateModal' }
    | { type: 'closeUpdateModal' }



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
        default:
            return state
    }
}