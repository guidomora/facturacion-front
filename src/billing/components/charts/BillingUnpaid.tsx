import { Box, Grid, Typography } from '@mui/material'
import BillingTable from '../BillingTable'
import { DataContext } from '../../../context/DataBillingContext/DataContext'
import { useContext } from 'react'
import { UiContext } from '../../../context/UibillingContext/UiContext'


const BillingUnpaid = () => {
    const { modalState } = useContext(UiContext)
    const { bills } = useContext(DataContext)
    const totalUnpaid = bills.filter((bill) => bill.paid === 'No')
    const amountUnpaid = totalUnpaid.reduce((acc, bill) => acc + bill.price, 0)



    return (
        <Grid width={'70%'}>
            <Box p={5} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
            boxShadow={7} sx={{ borderRadius: 5 }}>
                <Typography fontWeight={600} variant='h4' color='black' fontSize={25}>
                    {(modalState.english === false) ? 'Unpaid Bills' : 'Facturas no pagadas'}
                </Typography>
                <Box mt={3} display={'flex'}>
                    <Typography color='black' display={'flex'}>
                        {(modalState.english === false) ? 'Total unpaid bills: ' : 'Total de facturas no pagadas: '}
                    </Typography>
                    <Typography ml={1} fontWeight={500} color="error">${amountUnpaid}</Typography>
                </Box>
                <BillingTable bills={totalUnpaid} />
            </Box>
        </Grid>
    )
}

export default BillingUnpaid