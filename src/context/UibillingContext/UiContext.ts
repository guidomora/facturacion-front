import { createContext } from "react";
import { InitialStateModal } from "./UiProvider";

interface UiContextProps {
  modalState: InitialStateModal;
  openModal: () => void;
  closeModal: () => void;
}
  
  export const UiContext = createContext<UiContextProps>({} as UiContextProps);
