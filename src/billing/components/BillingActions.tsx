import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { FormState } from '../../hooks/useForm';
import { UpdateContext } from '../../context/UibillingContext/UpdateModalContext';

interface BillingActionsProps {
    id: string
    bill?: FormState
}

const BillingActions = ({id, bill}:BillingActionsProps) => {
    const { deleteBill } = useContext(DataContext)
    const { openModal } = useContext(UpdateContext)



    return (
        <Grid sx={{ borderBottom:'2px solid grey'}} 
        m={0} p={'0px 10px'} 
        display={'flex'} 
        flexDirection={'column'} 
        justifyContent={'space-around'}>
            <Button onClick={() => deleteBill(id)} sx={{ height: 30}} size='small' color='error' variant='outlined'>
                <DeleteIcon /> 
            </Button>
            <Button onClick={openModal} size='small' sx={{ height: 30}} color='info' variant='outlined'>
                <ModeEditIcon />
            </Button>
        </Grid>

    )
}

export default BillingActions