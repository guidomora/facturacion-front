import { createContext } from "react";
import { InitialStateModalUpdate } from "./UpdateProvider";

interface UpdateContextProps {
    modalUpdate: InitialStateModalUpdate;
    openModal: () => void;
    closeModal: () => void;
    getId: (id: string) => void;
}

export const UpdateContext = createContext<UpdateContextProps>({} as UpdateContextProps);
