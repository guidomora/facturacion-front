import { Box, Grid, Typography } from '@mui/material'
import BillingTable from '../BillingTable'
import { DataContext } from '../../../context/DataBillingContext/DataContext'
import { useContext, useEffect } from 'react'
import { UiContext } from '../../../context/UibillingContext/UiContext'
import { UpdateContext } from '../../../context/UibillingContext/UpdateModalContext'


const BillingUnpaid = () => {
    const { modalState } = useContext(UiContext)
    const { modalUpdate } = useContext(UpdateContext)
    const { bills, getUnpaidBills } = useContext(DataContext)

    useEffect(() => {
        const dataFetch = async () => {
            await getUnpaidBills()
        }
        dataFetch()
        console.log(bills);
        
    }, [modalUpdate, modalState])









    return (
        <Grid width={'100%'}>
            <Box p={5} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
                sx={{ borderRadius: 5, boxShadow: "0px 0px 28px 5px rgba(0, 0, 0, 0.3)" }}>
                <Typography fontWeight={600} variant='h4' color='black' fontSize={25}>
                    {(modalState.english === false) ? 'Unpaid Bills' : 'Facturas no pagadas'}
                </Typography>
                <Box mt={3} display={'flex'}>
                    <Typography color='black' display={'flex'}>
                        {(modalState.english === false) ? 'Total unpaid bills: ' : 'Total de facturas no pagadas: '}
                    </Typography>
                    <Typography ml={1} fontWeight={500} color="error">${bills.reduce((acc, bill) => acc + bill.price, 0)}</Typography>
                </Box>
                {bills.length == 0 ? <Typography variant='h5'
                    sx={{ textAlign: 'center', color: 'black', fontWeight: 600, mt: 35 }}>
                    Todas las facturas estan pagadas...
                </Typography> : <BillingTable bills={bills} />}
            </Box>
        </Grid>
    )
}

export default BillingUnpaid