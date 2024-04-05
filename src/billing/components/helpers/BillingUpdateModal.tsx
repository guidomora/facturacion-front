import { Button, Grid, TextField, Typography, RadioGroup, FormControlLabel, Radio, SelectChangeEvent } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FormState } from '../../../hooks/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datePicker.css'
import { DataContext } from '../../../context/DataBillingContext/DataContext';
import { UpdateContext } from '../../../context/UibillingContext/UpdateModalContext';
import { UiContext } from '../../../context/UibillingContext/UiContext';

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

const formState = {
    id: '',
    date: '',
    description: '',
    price: 0,
    paid: '' // Asumo que paid es un booleano

}



const BillingUpdateModal = () => {
    const { modalUpdate, closeModal } = useContext(UpdateContext)
    const { updateBill, getData } = useContext(DataContext)
    const { modalState } = useContext(UiContext)
    const [formValues, setFormValues] = useState<FormState>(formState);


    useEffect(() => {
        getData()
        
    }, [modalState, modalUpdate])

    const helperText = (text: string) => {
        return (modalState.english === false) ? `${text} is required` : `El ${text} es requerido`
    }



    useEffect(() => {
        // Cuando modalUpdate.updateId cambie, actualiza los valores del formulario
        setFormValues(modalUpdate.updateId);
    }, [modalUpdate.updateId]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateBill(modalUpdate.updateId.id, formValues);
        closeModal();
    };

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Actualiza los valores del formulario cuando cambian los campos
        setFormValues(prevState => ({ // toma los valores anteriores y los actualiza
            ...prevState,
            [name]: value
        }));
    };

    const selectChange = (event: SelectChangeEvent<"Yes" | "No"> ) => {
        const { name, value } = event.target;
        value === 'Yes' ? true : false
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
            }));
      };

    const dateChange = (date: Date | null) => {
        if (date !== null) {
            setFormValues(prevState => ({
                ...prevState,
                date: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
            }));
          }
      };

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
                    <Button onClick={closeModal} variant="contained" color='error' sx={{ textTransform: "none" }}>
                        {(modalState.english === false) ? 'Close' : 'Cerrar'}
                    </Button>
                </Grid>
                <form onSubmit={handleSubmit}>

                    <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} p={2}>
                        <Typography color={'black'}>
                            {(modalState.english === false) ? 'Update Bill' : 'Actualizar Factura'}
                        </Typography>
                        <TextField
                            name='description'
                            onChange={inputChange}
                            value={formValues.description}
                            // defaultValue={billUpdate?.description}
                            label={(modalState.english === false) ? 'Description' : 'Descripcion'}
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
                            value={formValues.id}
                            label='id'
                            focused={false}
                            size='small'
                            fullWidth
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
                            value={formValues.price}
                            label={(modalState.english === false) ? 'Price' : 'Precio'}
                            focused={false}
                            size='small'
                            error={(!formValues.price) ? true : false}
                            helperText={(!formValues.price) ? helperText(modalState.english === false ? 'Price' : 'precio') : false}
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
                            value={formValues.paid}
                            name="paid"
                            onChange={selectChange}
                        >
                            <FormControlLabel
                                sx={{ color: 'black', '& .Mui-checked': { color: 'black', } }}
                                value="Yes"
                                control={<Radio />} label={(modalState.english === false) ? 'Yes' : 'Si' } />
                            <FormControlLabel
                                sx={{ color: 'black', '& .Mui-checked': { color: 'black', } }}
                                value="No"
                                control={<Radio />} label="No" />
                        </RadioGroup>
                        <Typography sx={{ mt: 3, color: "black" }}>
                            {(modalState.english === false) ? 'Date' : 'Fecha'}
                        </Typography>
                        <DatePicker
                            name='date'
                            value={formValues.date}
                            dateFormat='dd/MM/yyyy'
                            selected={new Date}
                            onChange={dateChange}
                            className='date'

                        />
                        <Button
                            // disabled={(id!.length < 1 || date === undefined || description!.length < 1 || price! <= 0) ? true : false}
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: "black", color: "white", textTransform: "none", mt: 3 }}>
                            {(modalState.english === false) ? 'Update' : 'Actualizar'}
                        </Button>
                    </Grid>
                </form>


            </Modal>
        </>
    )
}

export default BillingUpdateModal