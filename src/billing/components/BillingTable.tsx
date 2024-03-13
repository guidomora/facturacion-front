import { Box, Grid, Typography } from "@mui/material"
import { Bill } from "../../context/DataBillingContext/DataProvider"
import BillingActions from "./BillingActions";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

interface BillingTableProps {
    bills: Bill[];
}


const BillingTable = ({ bills }: BillingTableProps) => {



    return (
        <Grid width={'100%'} p={7} display={"flex"} justifyContent={"center"}>
            <Box minWidth={150} display={"flex"} flexDirection={"column"} alignContent={"center"} borderRadius={'5px 0px 0px 5px'}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px', borderLeft:'2px solid grey', borderRight:'1px solid grey', borderTop:'2px solid grey'}}>
                <Typography borderRadius={'5px 0px 0px 0px'} sx={{backgroundColor:'#d4d4d4', p: '5px 10px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Date</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={70} sx={{ p: '5px 10px' }}>{bill.date}</Typography>
                    )
                })}
            </Box>
            <Box width={"60%"} display={"flex"} flexDirection={"column"} alignContent={"center"}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px', borderTop:'2px solid grey' }}>
                <Typography sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Detail</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={70} sx={{ p: '5px 5px' }}>{bill.description}</Typography>
                    )
                })}
            </Box>
            <Box minWidth={50} display={"flex"} flexDirection={"column"} alignContent={"center"}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px', borderTop:'2px solid grey' }}>
                <Typography sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Id</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={70} sx={{ p: '5px 5px' }} >{bill.id}</Typography>
                    )
                })}
            </Box>
            <Box minWidth={100} display={"flex"} flexDirection={"column"} alignContent={"center"}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px', borderTop:'2px solid grey' }}>
                <Typography sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }} width={'100%'} fontWeight={600}>Price</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Typography key={bill.id} borderBottom={'2px solid grey'} height={70} sx={{ p: '5px 5px' }}>${bill.price}</Typography>
                    )
                })}
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignContent={"center"} borderRadius={'0px 5px 5px 0px'}
                sx={{ backgroundColor: '#f8f8f8', color: 'black', p: '0px 0px', borderRight:'2px solid grey', borderTop:'2px solid grey' }}>
                <Typography borderRadius={'0px 5px 0px 0px'} sx={{backgroundColor:'#d4d4d4', p: '5px', borderBottom: '1px solid black' }}width={'100%'} fontWeight={600}>Paid</Typography>
                {bills.map((bill: Bill) => {
                    return (
                        <Grid key={bill.id} display={"flex"} height={'100%'}>
                            <Typography width={45} key={bill.id} borderBottom={'2px solid grey'}
                            sx={{textAlign:'center', p: '5px 5px 0px 5px', color:(bill.paid === 'No') ? 'red': 'green' }}>
                                {bill.paid === 'No' ? <CloseIcon /> : <DoneIcon />}
                            </Typography>
                            <BillingActions id={bill.id }/>
                        </Grid>
                    )
                })}
            </Box>
        </Grid>
    )
}

export default BillingTable