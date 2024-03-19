import { Grid, Typography, Button } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UiContext } from '../../context/UibillingContext/UiContext'

const BillingNav = () => {
    const {modalState, changeLanguage} = useContext(UiContext)            

    return (
        <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} pt={7}>
            <Typography variant='h5' sx={{ color: 'black', fontWeight: 600 }}>
                {(modalState.english == false) ? 'Billing' : 'Facturas'}
            </Typography>
            <Button onClick={() => changeLanguage((modalState.english == false) ? true : false ) }
            sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                {(modalState.english == false) ? 'Spanish' : 'English'}
            </Button>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Home' : 'Inicio'}
                </Button>
            </Link>
            <Link to={'/charts'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Charts' : 'Gráficos'}
                </Button>
            </Link>
            <Link to={'/search'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Search bills' : 'Buscar facturas'}
                </Button>
            </Link>
        </Grid>
    )
}

export default BillingNav