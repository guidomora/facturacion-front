import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import BillingTable from './BillingTable'
import { Bill } from '../../context/DataBillingContext/DataProvider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';




const BillingPagination = () => {
  const itemsPerPage = 3
  const { bills, getBillsByIdDescriptionPrice } = useContext(DataContext) //data
  const [currentPage, setCurrentPage] = useState(0) // pagination
  const [paginationBills, setPaginationBills] = useState<Bill[]>([]) // pagination
  const [counter, setCounter] = useState(0) // pagination page number
  const [disabled, setDisabled] = useState(false) // // pagination buton
  // const [searchTerm, setSearchTerm] = useState("test"); // search
  




  const filteredBills = () => {
    const newBills = bills.slice(currentPage, currentPage + itemsPerPage)
    setPaginationBills(newBills)
  }

  // useEffect(() => {
  //   if (searchTerm !== "") {
  //     getBillsByIdDescriptionPrice(searchTerm);
  //   }
  // }, [searchTerm]);

  useEffect(() => {
    filteredBills()
  }, [currentPage, bills])
  
  // getBillsByIdDescriptionPrice('test')


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
          <Button sx={{ m: '0px 15px', color: 'black', textTransform:'none' }} color='info' variant='outlined'>View all</Button>
          <form>
            <TextField
              id="input-with-icon-textfield"
              label="Search by description, price or Id"
              variant="outlined"
              size='small'
              focused={false}
              sx={{
                color: "black", '&:hover': {
                  borderColor: 'black', // Color fijo para el fondo al pasar el ratón
                },
                '& fieldset': {
                  borderColor: 'black', // Color fijo del borde
                },
                '& input': {
                  color: 'black', // Color fijo del texto
                },
                '& label': {
                  color: 'black',
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button sx={{ m: '0px 15px', color: 'black', textTransform:'none' }} color='info' variant='outlined'>Search</Button>
          </form>
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