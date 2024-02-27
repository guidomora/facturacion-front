import { Box, Grid, Typography } from "@mui/material"
import { useContext } from 'react';
import { DataContext } from "../../context/DataBillingContext/DataContext"
import { Bill } from "../../context/DataBillingContext/DataProvider"
import BillingActions from "./BillingActions";




const BillingTable = () => {
    const { bills } = useContext(DataContext)


    return (
        <Grid width={'100%'} p={7} display={"flex"} justifyContent={"center"}>
            <Box width={"10%"} display={"flex"} flexDirection={"column"} alignContent={"center"} borderRadius={'5px 0px 0px 5px'}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px' }}>
                <Typography borderRadius={'5px 0px 0px 0px'} sx={{backgroundColor:'#d4d4d4', p: '5px 10px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Date</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={100} sx={{ p: '5px 10px' }}>{bill.date}</Typography>
                    )
                })}
            </Box>
            <Box width={"60%"} display={"flex"} flexDirection={"column"} alignContent={"center"}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px' }}>
                <Typography sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Detail</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={100} sx={{ p: '5px 5px' }}>{bill.description}</Typography>
                    )
                })}
            </Box>
            <Box width={"5%"} display={"flex"} flexDirection={"column"} alignContent={"center"}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px' }}>
                <Typography sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Id</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={100} sx={{ p: '5px 5px' }} >{bill.id}</Typography>
                    )
                })}
            </Box>
            <Box width={"10%"} display={"flex"} flexDirection={"column"} alignContent={"center"}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px' }}>
                <Typography sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Price</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={100} sx={{ p: '5px 5px' }}>${bill.price}</Typography>
                    )
                })}
            </Box>
            <Box width={"10%"} display={"flex"} flexDirection={"column"} alignContent={"center"} borderRadius={'0px 5px 5px 0px'}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px' }}>
                <Typography borderRadius={'0px 5px 0px 0px'} sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }}width={'100%'} fontWeight={600}>Paid</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Grid key={bill.id} display={"flex"} height={'100%'}>
                            <Typography width={45} key={bill.id} borderBottom={'2px solid grey'} sx={{textAlign:'center', p: '0px 5px 0px 5px' }}>{bill.paid == false ? "no" : 'si'}</Typography>
                            <BillingActions id={bill.id } bill={bill}/>
                        </Grid>
                    )
                })}
            </Box>
        </Grid>
    )
}

export default BillingTable