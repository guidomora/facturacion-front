import { Grid, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const BillingNav = () => {
    return (
        <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} pt={7}>
            <Typography variant='h5' sx={{ color: 'black', fontWeight: 600 }}>Bills</Typography>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>View all</Button>
            </Link>
            <Link to={'/charts'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                    Charts
                </Button>
            </Link>
            <Link to={'/search'} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ m: '0px 15px', color: 'black', textTransform: 'none' }} color='info' variant='outlined'>
                    Search bill
                </Button>
            </Link>
        </Grid>
    )
}

export default BillingNav