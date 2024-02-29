import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid } from '@mui/material'


const BillingPagination = () => {
    const itemsPerPage = 3
    const { bills } = useContext(DataContext)
    const [pagination, setPagination] = useState([...bills].splice(0, itemsPerPage))
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = () => {
        const allElements = bills.length
        const nextPage = currentPage + 1
        const firstIndex = nextPage * itemsPerPage
        if (firstIndex === allElements) return

        setPagination([...bills].splice(firstIndex, itemsPerPage))
        setCurrentPage(nextPage)
        console.log(firstIndex, "firstIndex");
        
        console.log(pagination, "pagination");
        
        console.log('next');
        
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1
        if (prevPage < 0) return
        const firstIndex = prevPage * itemsPerPage
        setPagination([...bills].splice(firstIndex, itemsPerPage))
        setCurrentPage(prevPage)
        console.log(firstIndex, "firstIndex");
        
        console.log(pagination, "pagination");
        
        console.log('prev');
    }


  return (
    <Grid color={'black'}>
        <Button onClick={prevHandler} color='info' variant='outlined'>{'<'}</Button>
        <Button onClick={handleNext} color='info' variant='outlined'>{'>'}</Button>
    </Grid>
  )
}

export default BillingPagination