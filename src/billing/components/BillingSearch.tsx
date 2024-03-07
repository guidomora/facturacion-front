import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const BillingSearch = () => {
  return (
    <Grid display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt={5}>
        <Typography variant='h5' sx={{color:'black', fontWeight:600}}>Bills</Typography>
        <TextField
        id="input-with-icon-textfield"
        label="Search by description, price or Id"
        variant="outlined"
        size='small'
        focused={false}
        sx={{ color: "black", '&:hover': {
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
            }}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  )
}

export default BillingSearch