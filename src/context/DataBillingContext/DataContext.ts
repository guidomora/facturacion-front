import { createContext } from "react";
import { Bill, Payments } from "./DataProvider";

interface DataContextProps {
  bills: Bill[];
  payments: Payments[];
  secondPayments: Payments[];
  totalItems:number
  getData: (page:number, limit:number) => void;
  createBill: (bill: Bill) => void;
  deleteBill: (id: string) => void;
  updateBill: (id: string, bill: Bill) => void;
  getBillsByIdDescriptionPrice: (searchParam: string | number) => void;
  getPaymentByYear: (year: number) => void;
  getTotalByIdAndYear: (id: string, year: number) => void;
  getBillsByPerson:(personLetter:string, personDate:string) => void;
  getUnpaidBills:()=> void
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);