import { Button } from "@mui/material"
import { useContext } from "react"
import { UiContext } from '../../../context/UibillingContext/UiContext';


const AddBilling = () => {
const { openModal, modalState } = useContext(UiContext)


  return (
    <Button onClick={openModal}  variant="outlined" color="info" sx={{color:'black', textTransform:"none"}}>
        {(modalState.english === false) ? 'Add Bill' : 'Agregar Factura'}
    </Button>
  )
}

export default AddBilling