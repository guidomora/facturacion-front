import { createContext } from "react";
import { Bill, Payments } from "./DataProvider";

interface DataContextProps {
  bills: Bill[];
  payments: Payments[];
  getData: () => void;
  createBill: (bill: Bill) => void;
  deleteBill: (id: string) => void;
  updateBill: (id: string, bill: Bill) => void;
  getBillsByIdDescriptionPrice: (searchParam: string | number) => void;
  getPaymentByYear: (year: number) => void;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);