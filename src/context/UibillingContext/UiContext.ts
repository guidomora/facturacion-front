import { createContext } from "react";
import { InitialStateModal } from "./UiProvider";

interface UiContextProps {
  modalState: InitialStateModal;
  changeLanguage: (state:boolean) => void;
  openModal: () => void;
  closeModal: () => void;
}
  
  export const UiContext = createContext<UiContextProps>({} as UiContextProps);
