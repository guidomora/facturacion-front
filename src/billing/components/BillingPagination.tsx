import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid, Typography } from '@mui/material'
import BillingTable from './BillingTable'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { UiContext } from '../../context/UibillingContext/UiContext';
import { UpdateContext } from '../../context/UibillingContext/UpdateModalContext';




const BillingPagination = () => {
  const itemsPerPage = 10
  const { modalState } = useContext(UiContext)
  const { modalUpdate } = useContext(UpdateContext)
  const { bills, getData, totalItems} = useContext(DataContext) //data
  const [counter, setCounter] = useState(1) // pagination page number


  useEffect(() => {
    getData(counter, itemsPerPage)
    console.log(totalItems, 'asdasdas');
    
  } , [counter, modalUpdate, modalState])



  const handleNext = () => {
    if ((itemsPerPage * counter) >= totalItems ) return
    setCounter( counter + 1)
  }
  const prevHandler  = () => {
    if (counter <= 1) return
    setCounter( counter - 1)
  }


  return (
    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Grid width={'100%'}>
        <BillingTable bills={bills} /> {/* le pasamos las bills que queremos mostrar */}
      </Grid>
      <Grid display={'flex'} alignItems={'center'} mb={3}>
        <Button onClick={prevHandler} sx={{ m: '0px 15px', color: 'black' }} color='info' variant='outlined'><ArrowBackIosIcon /></Button>
        <Typography color={'black'}>{counter}</Typography>
        <Button onClick={handleNext} sx={{ m: '0px 15px', color: 'black' }} color='info' variant='outlined'><ArrowForwardIosIcon /></Button>
      </Grid>
    </Grid>
  )
}

export default BillingPagination