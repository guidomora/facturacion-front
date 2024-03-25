import { Button } from "@mui/material"
import { useContext } from "react"
import { UiContext } from '../../../context/UibillingContext/UiContext';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';


const AddBilling = () => {
const { openModal, modalState } = useContext(UiContext)


  return (
    <Button onClick={openModal}  variant="outlined" color="info" sx={{color:'black', textTransform:"none"}}>
        {(modalState.english === false) ? 'Add Bill' : 'Agregar Factura'} <PriceCheckIcon sx={{ml:1}} />
    </Button>
  )
}

export default AddBilling