import { Button, Grid, TextField, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import useForm, { FormState } from '../../../hooks/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datePicker.css'
import { DataContext } from '../../../context/DataBillingContext/DataContext';
import { UpdateContext } from '../../../context/UibillingContext/UpdateModalContext';

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

const billForm: FormState = {
    id: '',
    date: '',
    description: '',
    price: 0,
    paid: false || 'No'
}

interface BillingActionsProps {
    bill: FormState;
    id: string
}


const BillingUpdateModal = ( {id, bill} : BillingActionsProps) => {
    const { date, description, price, inputChange, formState, selectChange, dateChange, onReset } = useForm(billForm)
    const { updateBill, bills } = useContext(DataContext)
    const { modalUpdate, closeModal } = useContext(UpdateContext)




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateBill(id, formState);
        console.log('update', id);
    }


    return (
        <>

            <Modal
                isOpen={modalUpdate.modalUpdateOpen}
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
                        <Typography color={'black'}>Update Billing</Typography>
                        <TextField
                            error={(description!.length < 1) ? true : false}
                            helperText={(description!.length < 1) ? 'Descrption required' : false}
                            name='description'
                            onChange={inputChange}
                            value={description} 
                            label={'Descrption'}
                            focused={false} size='small'
                            // defaultValue={billOne.description}
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
                            label='Billing Id'
                            focused={false}
                            size='small'
                            fullWidth
                            error={(id!.length < 1) ? true : false}
                            helperText={(id!.length < 1) ? 'Id required' : false}
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
                            value={price} label='Price'
                            focused={false} size='small'
                            error={(price! < 0) ? true : false}
                            helperText={(price! < 0) ? 'Price must be positive' : false}
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
                        <Typography sx={{ mt: 3, color: "black" }}>Paid</Typography>
                        <RadioGroup
                            defaultValue="No"
                            name="paid"
                            onChange={selectChange}
                        >
                            <FormControlLabel
                                sx={{ color: 'black', '& .Mui-checked': { color: 'black', } }}
                                value="Yes"
                                control={<Radio />} label="Yes" />
                            <FormControlLabel
                                sx={{ color: 'black', '& .Mui-checked': { color: 'black', } }}
                                value="No"
                                control={<Radio />} label="No" />
                        </RadioGroup>
                        <Typography sx={{ mt: 3, color: "black" }}>Date</Typography>
                        <DatePicker
                            name='date'
                            value={date}
                            dateFormat='dd/MM/yyyy'
                            selected={new Date}
                            onChange={dateChange}
                            className='date'

                        />
                        <Button disabled={(id!.length < 1 || date === undefined || description!.length < 1 || price! <= 0) ? true : false}
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: "black", color: "white", textTransform: "none", mt: 3 }}>Add</Button>
                    </Grid>
                </form>


            </Modal>
        </>
    )
}

export default BillingUpdateModal