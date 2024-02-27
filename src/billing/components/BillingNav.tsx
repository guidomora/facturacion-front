import {  Grid } from "@mui/material"
import ViewFormat from "./helpers/viewFormat"
import AddBilling from "./helpers/addBilling"
import BillingModal from "./helpers/BillingModal"





const BillingNav = () => {


    return (
        <Grid 
        width={'100%'} 
        display={"flex"} 
        alignItems={"center"} 
        justifyContent={"space-evenly"} 
        height={120} 
        borderBottom={'1px solid rgba(255, 255, 255, 0.502)'} 
        sx={{backgroundColor:'#2c2c2c' ,boxShadow:'rgba(255, 255, 255, 0.502) 0px 0px 5px 0px;' }}>
            <ViewFormat />
            <AddBilling />
            <BillingModal />
        </Grid>
    )
}

export default BillingNav