import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { UpdateContext } from '../../context/UibillingContext/UpdateModalContext';
import BillingUpdateModal from './helpers/BillingUpdateModal';

interface BillingActionsProps {
    id: string
}

const BillingActions = ({ id }: BillingActionsProps) => {
    const { deleteBill } = useContext(DataContext)
    const { openModal, getId } = useContext(UpdateContext)

    const onOpenModal = () => {
        getId(id)
        openModal()
    }



    return (
        <Grid sx={{ borderBottom: '2px solid grey' }}
            m={0} p={'0px 10px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-around'}>
            <Button onClick={() => deleteBill(id)} sx={{ height: 25 }} size='small' color='error' variant='outlined'>
                <DeleteIcon />
            </Button>
            <Button onClick={onOpenModal} size='small' sx={{ height: 25 }} color='info' variant='outlined'>
                <ModeEditIcon />
            </Button>
            <BillingUpdateModal />
        </Grid>

    )
}

export default BillingActions