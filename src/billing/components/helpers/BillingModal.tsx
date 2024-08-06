import { Button, Grid, TextField, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useContext } from 'react';
import Modal from 'react-modal';
import { UiContext } from '../../../context/UibillingContext/UiContext';
import useForm, { FormState } from '../../../hooks/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datePicker.css'
import { DataContext } from '../../../context/DataBillingContext/DataContext';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
    },
};

const bill: FormState = {
    id: '',
    date: '',
    description: '',
    price: 0,
    paid: false || 'No'
}


const BillingModal = () => {
    const { id, date, description, price, inputChange, formState, selectChange, dateChange, onReset } = useForm(bill)
    const { modalState, closeModal } = useContext(UiContext)
    const { createBill } = useContext(DataContext)



    const helperText = (text: string) => {
        return (modalState.english === false) ? `${text} is required` : `El ${text} es requerido`
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createBill(formState)
        onReset()
        closeModal()
    }


    return (
        <>

            <Modal
                isOpen={modalState.modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                closeTimeoutMS={200}
                ariaHideApp={false}
            >
                <Grid display={'flex'} justifyContent={'flex-end'}>
                    <Button onClick={closeModal} variant="contained" color='error' sx={{ textTransform: "none" }}>Close</Button>
                </Grid>
                <form onSubmit={handleSubmit}>

                    <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} p={2}>
                        <Typography color={'black'}>
                            {(modalState.english === false) ? 'New bill' : 'Nueva factura'}
                        </Typography>
                        <TextField
                            error={(description!.length < 1) ? true : false}
                            helperText={(description!.length < 1) ? helperText(modalState.english === false ? 'Description' : 'descripcion') : false}
                            name='description'
                            onChange={inputChange}
                            value={description} label='Detail'
                            focused={false} size='small'
                            fullWidth sx={{
                                mt: 3, color: "black", '&:hover': {
                                    borderColor: 'black', // Color fijo para el fondo al pasar el ratón
                                },
                                '& fieldset': {
                                    borderColor: 'black', // Color fijo del borde
                                },
                                '& input': {
                                    color: 'black', // Color fijo del texto
                                },
                                '& label': {
                                    color: 'black',
                                },
                            }} />
                        <TextField
                            name='id'
                            onChange={inputChange}
                            value={id}
                            label='Id de la factura'
                            focused={false}
                            size='small'
                            fullWidth
                            error={(id!.length < 1) ? true : false}
                            helperText={(id!.length < 1) ? helperText('Id') : false}
                            sx={{
                                mt: 3, color: "black", '&:hover': {
                                    borderColor: 'black', // Color fijo para el fondo al pasar el ratón
                                },
                                '& fieldset': {
                                    borderColor: 'black', // Color fijo del borde
                                },
                                '& input': {
                                    color: 'black', // Color fijo del texto
                                },
                                '& label': {
                                    color: 'black',
                                },
                            }} />
                        <TextField
                            type='number'
                            name='price'
                            onChange={inputChange}
                            value={price}
                            label={(modalState.english === false) ? 'Price' : 'Precio'}
                            focused={false} size='small'
                            error={(price! == 0) ? true : false}
                            helperText={(price! == 0) ? helperText(modalState.english === false ? 'Price' : 'precio') : false}
                            fullWidth sx={{
                                mt: 3, color: "black", '&:hover': {
                                    borderColor: 'black', // Color fijo para el fondo al pasar el ratón
                                },
                                '& fieldset': {
                                    borderColor: 'black', // Color fijo del borde
                                },
                                '& input': {
                                    color: 'black', // Color fijo del texto
                                },
                                '& label': {
                                    color: 'black',
                                },
                            }} />
                        <Typography sx={{ mt: 3, color: "black" }}>
                            {(modalState.english === false) ? 'Paid' : 'Pagado'}
                        </Typography>
                        <RadioGroup
                            defaultValue="No"
                            name="paid"
                            onChange={selectChange}
                        >
                            <FormControlLabel
                                sx={{ color: 'black', '& .Mui-checked': { color: 'black', } }}
                                value="Yes"
                                control={<Radio />} label={(modalState.english === false) ? 'Yes' : 'Si'} />
                            <FormControlLabel
                                sx={{ color: 'black', '& .Mui-checked': { color: 'black', } }}
                                value="No"
                                control={<Radio />} label="No" />
                        </RadioGroup>
                        <Typography sx={{ mt: 3, color: "black" }}>
                            {(modalState.english === false) ? 'Date' : 'Fecha'}
                        </Typography>
                        <DatePicker
                            autoComplete='off'
                            name='date'
                            value={date}
                            dateFormat='dd/MM/yyyy'
                            selected={new Date()}
                            onChange={dateChange}
                            className='date'

                        />
                        <Button disabled={(id!.length < 1 || date === undefined || description!.length < 1 || price! <= 0 || date === '') ? true : false}
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: "black", color: "white", textTransform: "none", mt: 3 }}>
                            {(modalState.english === false) ? 'Create' : 'Crear'}
                        </Button>
                    </Grid>
                </form>


            </Modal>
        </>
    )
}

export default BillingModal