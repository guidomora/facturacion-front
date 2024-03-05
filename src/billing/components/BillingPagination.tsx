import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid } from '@mui/material'
import BillingTable from './BillingTable'
import { Bill } from '../../context/DataBillingContext/DataProvider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BillingSearch from './BillingSearch'




const BillingPagination = () => {
  const itemsPerPage = 3
  const { bills } = useContext(DataContext)
  const [currentPage, setCurrentPage] = useState(0)
  const [paginationBills, setPaginationBills] = useState<Bill[]>([])
  const [disabled, setDisabled] = useState(false)

  const filteredBills = () => {
    const newBills = bills.slice(currentPage, currentPage + itemsPerPage)
    setPaginationBills(newBills)
  }

  useEffect(() => {
    
    filteredBills()
  }, [bills, currentPage])

  const handleNext = () => {
    const maxPages = Math.ceil(bills.length / itemsPerPage);
    const nextPage = currentPage + itemsPerPage;

    if (nextPage < maxPages * itemsPerPage) {
      setCurrentPage(nextPage);
      setDisabled(true)
    } else if (currentPage < maxPages - 1) {
      setCurrentPage(maxPages - 1);
    }

  }

  const prevHandler = () => {
    if (currentPage === 0) return

    setCurrentPage(currentPage - itemsPerPage)
    console.log('prev');
  }


  return (
    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Grid>
        <BillingSearch />
        <BillingTable bills={paginationBills} />
      </Grid>
      <Grid>
        <Button onClick={prevHandler} sx={{m:'0px 15px', color:'black'}} color='warning' variant='outlined'><ArrowBackIosIcon /></Button>
        <Button onClick={handleNext} sx={{m:'0px 15px', color:'black'}}  color='warning' variant='outlined'><ArrowForwardIosIcon /></Button>
      </Grid>
    </Grid>
  )
}

export default BillingPagination