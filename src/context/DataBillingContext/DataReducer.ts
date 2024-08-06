import { FormState } from "../../hooks/useForm"
import { Bill, DbState, Payments } from "./DataProvider"


type ActionModal =
    | { type: 'getData', payload: { bills: Bill[], totalItems: number } }
    | { type: 'createBill', payload: FormState }
    | { type: 'deleteBill', payload: string }
    | { type: 'updateBill', payload: FormState }
    | { type: 'getBillsByIdDescriptionPrice', payload: Bill[] }
    | { type: 'getPaymentByYear', payload: Payments[] }
    | { type: 'getTotalByIdAndYear', payload: Payments[] }
    | { type: 'getBillsByPerson', payload: Bill[] }
    | { type: 'getUnpaidBills', payload: Bill[] }


export const dataReducer = (state: DbState, action: ActionModal) => {
    switch (action.type) {
        case 'getData':
            return {
                ...state,
                bills: action.payload.bills,
                totalItems: action.payload.totalItems
            }
        case 'createBill':
            return {
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
        case 'getBillsByPerson':
            return {
                ...state,
                bills: action.payload
            }
        case 'getUnpaidBills':
            return {
                ...state,
                bills: action.payload
            }
        default:
            return state
    }
}