import { useState } from "react";


export interface FormStateSearch {
    search: string | number;
  }


const useFormSearch = (initialForm: FormStateSearch) => {
  const [formState, setFormState] = useState<FormStateSearch>(initialForm);

  const inputChange = ({ target}: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = target;
    const numericValue = value === '' ? '' : isNaN(Number(value)) ? value : Number(value);
    setFormState({
      ...formState,
      [name]: numericValue,
    });
  };





  const onReset = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    inputChange,
    onReset,
  };
};

export default useFormSearch;