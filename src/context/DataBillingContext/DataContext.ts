import { createContext } from "react";
import { Bill } from "./DataProvider";

interface DataContextProps {
  bills: Bill[];
  getData: () => void;
  createBill: (bill: Bill) => void;
  deleteBill: (id: string) => void;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);