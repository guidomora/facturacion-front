import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid } from '@mui/material'
import BillingTable from './BillingTable'
import { Bill } from '../../context/DataBillingContext/DataProvider'



const BillingPagination = () => {
    const itemsPerPage = 3
    const { bills } = useContext(DataContext)
    const [currentPage, setCurrentPage] = useState(0)
    const [paginationBills, setPaginationBills] = useState<Bill[]>([])

    const filteredBills = () => {
      const newBills = bills.slice(currentPage, currentPage + itemsPerPage)
      setPaginationBills(newBills)
      
      
    }
    
    useEffect(() => {
      filteredBills()
    }, [currentPage])
    
    const handleNext = () => {
        const maxPages = Math.ceil(bills.length / itemsPerPage)
        if (currentPage <= maxPages ) {
          setCurrentPage(currentPage + itemsPerPage)
        } 
        console.log(maxPages, 'maxPages');
        console.log(currentPage, 'current');
        console.log(bills);
        
        
    }

    const prevHandler = () => {
      if (currentPage === 0) return
      setCurrentPage(currentPage - itemsPerPage)
      console.log('prev');
    }


  return (
    <Grid>
      <Grid>
        <BillingTable bills={paginationBills}/>
      </Grid>
        <Button onClick={prevHandler} color='info' variant='outlined'>{'<'}</Button>
        <Button onClick={handleNext} color='info' variant='outlined'>{'>'}</Button>
    </Grid>
  )
}

export default BillingPagination