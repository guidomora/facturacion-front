import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { UpdateContext } from '../../context/UibillingContext/UpdateModalContext';
import BillingUpdateModal from './helpers/BillingUpdateModal';
import Toastify from 'toastify-js'
import { UiContext } from '../../context/UibillingContext/UiContext';

interface BillingActionsProps {
    id: string;
    date: string;
    description: string;
    paid: string | boolean;
    price: number;
}

const BillingActions = ({ id, date, description, paid, price }: BillingActionsProps) => {
    const { deleteBill } = useContext(DataContext)
    const { openModal, getId } = useContext(UpdateContext)
    const {modalState} = useContext(UiContext)

    const handleDelete = () => {
        deleteBill(id)
        Toastify({
            text: modalState.english === false ? `Bill ${id} deleted` : `Factura ${id} eliminada`,
            duration: 2000,
            newWindow: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                marginLeft: '90vw',
                background: "red",
                padding: "10px",
                zIndex: '99999',
                position: 'absolute',
                borderRadius: '5px'
            },
        }).showToast();
    }

    const onOpenModal = () => {
        getId({ id, date, description, price, paid })
        openModal()
    }



    return (
        <Grid sx={{ borderBottom: '2px solid grey' }}
            m={0} p={'0px 20px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-around'}>
            <Button onClick={handleDelete} sx={{ height: 25 }} size='small' color='error' variant='outlined'>
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