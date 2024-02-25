import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface BillingActionsProps {
    id: string
}

const BillingActions = ({id}:BillingActionsProps) => {
    const { deleteBill } = useContext(DataContext)
    return (
        <Grid sx={{ borderBottom:'2px solid grey'}} 
        m={0} p={'0px 10px'} 
        display={'flex'} 
        flexDirection={'column'} 
        justifyContent={'space-around'}>
            <Button onClick={() => deleteBill(id)} sx={{ height: 30}} size='small' color='error' variant='outlined'>
                <DeleteIcon /> 
            </Button>
            <Button size='small' sx={{ height: 30}} color='info' variant='outlined'>
                <ModeEditIcon />
            </Button>
        </Grid>

    )
}

export default BillingActions