import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";


export interface FormState {
    id: string;
    date: string;
    description: string;
    price: number;
    paid: string | boolean;
  }


const useForm = (initialForm: FormState) => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const inputChange = ({ target}: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const selectChange = (event: SelectChangeEvent<"Yes" | "No"> ) => {
    const { name, value } = event.target;
    value === 'Yes' ? true : false
    setFormState({
      ...formState,
      [name]: value,
      
    });
    console.log(value)
  };

  const dateChange = (date: Date | null) => {
    if (date !== null) {
        setFormState({
          ...formState,
          date: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        });
      }
  };


  const onReset = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    inputChange,
    onReset,
    selectChange,
    dateChange
  };
};

export default useForm;