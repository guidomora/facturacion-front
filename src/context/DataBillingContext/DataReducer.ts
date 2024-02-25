import { FormState } from "../../hooks/useForm"
import { Bill, DbState } from "./DataProvider"


type ActionModal =
| { type: 'getData', payload: Bill[] }
| { type: 'createBill', payload: FormState }
| { type: 'deleteBill', payload: string }


export const dataReducer = (state: DbState, action: ActionModal) => {
    switch (action.type) {
        case 'getData':
            return {
                ...state,
                bills: action.payload
            }
        case 'createBill':
            return{
                ...state,
                bills: [...state.bills, action.payload] // to the existing bills, add the new bill
            }
        case 'deleteBill':
            return {
                ...state,
                bills: state.bills.filter(bill => bill.id !== action.payload)
            }
        default:
            return state
    }
}