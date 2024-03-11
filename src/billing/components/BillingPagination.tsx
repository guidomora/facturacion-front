import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid, Typography } from '@mui/material'
import BillingTable from './BillingTable'
import { Bill } from '../../context/DataBillingContext/DataProvider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'




const BillingPagination = () => {
  const itemsPerPage = 6
  const { bills } = useContext(DataContext) //data
  const [currentPage, setCurrentPage] = useState(0) // pagination
  const [paginationBills, setPaginationBills] = useState<Bill[]>([]) // pagination
  const [counter, setCounter] = useState(0) // pagination page number
  const [disabled, setDisabled] = useState(false) // // pagination buton




  const filteredBills = () => {
    const newBills = bills.slice(currentPage, currentPage + itemsPerPage)
    setPaginationBills(newBills)
  }

  useEffect(() => {
    filteredBills()
  }, [currentPage, bills])



  // Buttons for pagination
  const handleNext = () => {
    const maxPages = Math.ceil(bills.length / itemsPerPage);
    const nextPage = currentPage + itemsPerPage;


    if (nextPage < maxPages * itemsPerPage) {
      setCurrentPage(nextPage);
      setDisabled(true)
      setCounter(counter + 1)
    } else if (currentPage < maxPages - 1) {
      setCurrentPage(maxPages - 1);
    }

  }

  const prevHandler = () => {
    if (currentPage === 0) return

    setCurrentPage(currentPage - itemsPerPage)
    if (counter <= 0) {
      setCounter(0)
    } else {
      setCounter(counter - 1)
    }
  }


  return (
    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Grid>
        <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} pt={7}>
          <Typography variant='h5' sx={{ color: 'black', fontWeight: 600 }}>Bills</Typography>
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
        <BillingTable bills={paginationBills} /> {/* le pasamos las bills que queremos mostrar */}
      </Grid>
      <Grid display={'flex'} alignItems={'center'}>
        <Button onClick={prevHandler} sx={{ m: '0px 15px', color: 'black' }} color='warning' variant='outlined'><ArrowBackIosIcon /></Button>
        <Typography color={'black'}>{counter}</Typography>
        <Button onClick={handleNext} sx={{ m: '0px 15px', color: 'black' }} color='warning' variant='outlined'><ArrowForwardIosIcon /></Button>
      </Grid>
    </Grid>
  )
}

export default BillingPagination