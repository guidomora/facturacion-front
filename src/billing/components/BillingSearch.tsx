import { Button, Grid, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import BillingTable from './BillingTable';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataBillingContext/DataContext';

const BillingSearch = () => {
  const { bills, getBillsByIdDescriptionPrice } = useContext(DataContext)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getBillsByIdDescriptionPrice('test')
  } , [search])

  return (
    <Grid display={'flex'} flexDirection={'column'}>
      <Grid display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt={5}>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
          <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>View all</Button>
        </Link>
        <form>
          <TextField
            id="input-with-icon-textfield"
            label="Search by description, price or Id"
            variant="outlined"
            size='small'
            focused={false}
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
          <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>Search</Button>
        </form>
      </Grid>
        <BillingTable bills={bills} />
    </Grid>
  )
}

export default BillingSearch