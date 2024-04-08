import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid, Typography } from '@mui/material'
import BillingTable from './BillingTable'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




const BillingPagination = () => {
  const { bills, getData, total } = useContext(DataContext) //data
  const [counter, setCounter] = useState(1) // pagination page number
  const totalBills = Math.ceil(total / 10)



  // Buttons for pagination
  const handleNext = () => {
    setCounter((counter < totalBills) ? counter + 1 : counter + 0)
  }

  const prevHandler = () => {
    setCounter((counter <= 1) ? counter - 0 : counter - 1)
  }

  useEffect(() => {
    getData(counter)
  }, [counter])


  return (
    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Grid width={'100%'}>
        <BillingTable bills={bills} /> {/* le pasamos las bills que queremos mostrar */}
      </Grid>
      <Grid display={'flex'} alignItems={'center'}>
        <Button onClick={prevHandler} sx={{ m: '0px 15px', color: 'black' }} color='info' variant='outlined'><ArrowBackIosIcon /></Button>
        <Typography color={'black'}>{counter}</Typography>
        <Button onClick={handleNext} sx={{ m: '0px 15px', color: 'black' }} color='info' variant='outlined'><ArrowForwardIosIcon /></Button>
      </Grid>
    </Grid>
  )
}

export default BillingPagination