import { FormState } from "../../hooks/useForm"
import { Bill, BillObject, DbState, Payments } from "./DataProvider"


type ActionModal =
| { type: 'getData', payload: BillObject }
| { type: 'createBill', payload: FormState }
| { type: 'deleteBill', payload: string }
| { type: 'updateBill', payload: FormState }
| { type: 'getBillsByIdDescriptionPrice', payload: Bill[] }
| { type: 'getPaymentByYear', payload: Payments[] }
| { type: 'getTotalByIdAndYear', payload: Payments[]}


export const dataReducer = (state: DbState, action: ActionModal) => {
    switch (action.type) {
        case 'getData':
            return {
                ...state,
                bills: action.payload.sortedBillings,
                total: action.payload.total,
                next: action.payload.next,
                previous: action.payload.previous
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
        case 'updateBill':
            return {
                ...state,
                bills: state.bills.map(bill => bill.id === action.payload.id ? action.payload : bill)
            }
        case 'getBillsByIdDescriptionPrice':
            return {
                ...state,
                bills: action.payload
            }
        case 'getPaymentByYear':
            return {
                ...state,
                payments: action.payload
            }
        case 'getTotalByIdAndYear':
            return {
                ...state,
                secondPayments: action.payload
            }
        default:
            return state
    }
}