import { Grid, Typography, Button } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UiContext } from '../../context/UibillingContext/UiContext'
import AddBilling from './helpers/addBilling'
import BillingModal from './helpers/BillingModal'
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import TranslateIcon from '@mui/icons-material/Translate';
import HomeIcon from '@mui/icons-material/Home';
import { Person } from '@mui/icons-material'

const BillingNav = () => {
    const {modalState, changeLanguage} = useContext(UiContext)            

    return (
        <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} p={4} mb={6} borderBottom={'solid 1px #0288d1'} bgcolor={'#e7e7e7'}>
            <BillingModal />
            <Typography variant='h5' sx={{ color: 'black', fontWeight: 600 }}>
                {(modalState.english == false) ? 'Billing' : 'Facturas'}
            </Typography>
            <AddBilling />
            <Button onClick={() => changeLanguage((modalState.english == false) ? true : false ) }
            sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                {(modalState.english == false) ? 'Spanish' : 'English'} <TranslateIcon sx={{ml:1, height:20}}/>
            </Button>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Home' : 'Inicio'} <HomeIcon sx={{ml:1, height:20}}/>
                </Button>
            </Link>
            <Link to={'/charts'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none', display:'flex', alignItems:'center' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Charts' : 'Resumenes'} <BarChartIcon sx={{ml:1, height:20}}/>
                </Button>
            </Link>
            <Link to={'/search'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none', display:'flex', alignItems:'center' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Search bills' : 'Buscar facturas'} <SearchIcon sx={{ml:1, height:20}}/>
                </Button>
            </Link>
            <Link to={'/persons'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none', display:'flex', alignItems:'center' }} color='info' variant='outlined'>
                    {(modalState.english == false) ? 'Persons' : 'Personas'} <Person sx={{ml:1, height:20}}/>
                </Button>
            </Link>
        </Grid>
    )
}

export default BillingNav