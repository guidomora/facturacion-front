import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import BillingTable from './BillingTable';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataBillingContext/DataContext';
import useFormSearch from '../../hooks/useFormSearch';





const BillingSearch = () => {
  const { bills, getBillsByIdDescriptionPrice } = useContext(DataContext)
  const [formValues, setFormValues] = useState({ search: '' });
  // const { formState, inputChange, search } = useFormSearch({ search: '' })

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Actualiza los valores del formulario cuando cambian los campos
    setFormValues(prevState => ({ // toma los valores anteriores y los actualiza
        ...prevState,
        [name]: value
    }));
};
  
  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formValues.search === '') return
    getBillsByIdDescriptionPrice(formValues.search)
    console.log('bills', bills);
    console.log('formValues', formValues.search);
    
    
  }



  return (
    <Grid display={'flex'} flexDirection={'column'} mt={15}>
      <Grid display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt={5}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="input-with-icon-textfield"
            label="Search by description, price or Id"
            variant="outlined"
            size='small'
            focused={false}
            name='search'
            value={formValues.search}
            onChange={inputChange}
            sx={{
              color: "black", '&:hover': {
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
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type='submit' sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>Search</Button>
        </form>
      </Grid>
      {(bills.length === 0) ? <Typography variant='h5' 
      sx={{ textAlign: 'center', color: 'black', fontWeight: 600, mt: 35 }}>
        No bills found...
      </Typography> :
        <BillingTable bills={bills} />
      }
    </Grid>
  )
}

export default BillingSearch