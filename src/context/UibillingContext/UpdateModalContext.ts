import { createContext } from "react";
import { InitialStateModalUpdate, UpdateIdBill } from "./UpdateProvider";

interface UpdateContextProps {
    modalUpdate: InitialStateModalUpdate;
    openModal: () => void;
    closeModal: () => void;
    getId: (updateId:UpdateIdBill) => void;
}

export const UpdateContext = createContext<UpdateContextProps>({} as UpdateContextProps);
