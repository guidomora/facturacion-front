import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import BillingTable from './BillingTable';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataBillingContext/DataContext';
import { UiContext } from '../../context/UibillingContext/UiContext';
import { Bill } from '../../context/DataBillingContext/DataProvider';






const BillingSearch = () => {
  const { bills } = useContext(DataContext)
  const [formValues, setFormValues] = useState({ search: '' });
  const { modalState } = useContext(UiContext)
  const [billsFiltered, setBillsFiltered] = useState<Bill[]>([])

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
    const filteredBills = bills.filter((bill) => 
      bill.description.toLowerCase().includes(formValues.search.toLowerCase()) ||
      bill.price.toString().includes(formValues.search) ||
      bill.id.toString().includes(formValues.search)
    )
    setBillsFiltered(filteredBills)
    console.log(billsFiltered);
  }


  
  


  return (
    <Grid display={'flex'} flexDirection={'column'} mt={15}>
      <Grid display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt={5}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="input-with-icon-textfield"
            label={(modalState.english === false) ? 'Search by Id, Description or Price' : 'Buscar por Id, Descripción o Precio'}
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
          <Button type='submit' sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
            {(modalState.english === false) ? 'Search' : 'Buscar'}
          </Button>
        </form>
      </Grid>
      {(billsFiltered.length === 0) ? <Typography variant='h5' 
      sx={{ textAlign: 'center', color: 'black', fontWeight: 600, mt: 35 }}>
        {(modalState.english === false) ? 'No bills found...' : 'No se encontraron facturas...'}
      </Typography> :
        <BillingTable bills={billsFiltered} />
      }
    </Grid>
  )
}

export default BillingSearch