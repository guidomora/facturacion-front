import { Button } from "@mui/material"
import { useContext } from "react"
import { UiContext } from '../../../context/UibillingContext/UiContext';


const AddBilling = () => {
const { openModal } = useContext(UiContext)


  return (
    <Button onClick={openModal}  variant="contained" sx={{backgroundColor:"white", textTransform:"none"}}>
        Add Billing
    </Button>
  )
}

export default AddBilling