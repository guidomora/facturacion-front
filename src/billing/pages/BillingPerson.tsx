import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataBillingContext/DataContext"
import { Box, Button, Grid, Typography } from "@mui/material"
import BillingTable from "../components/BillingTable"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { actualMonthWord, actualMonthYear, nowMonthWord } from "../../helpers/monthsYear";


const BillingPerson = () => {
  const [person, setPerson] = useState<string>('g')
  const [month, setMonth] = useState<string>(nowMonthWord)
  const { bills, getBillsByPerson } = useContext(DataContext)



  const [date, setDate] = useState<string>(actualMonthYear)

  const handlePrevMonth = () => {
    const [month, year] = date.split('/').map(Number);
    const newDate = new Date(year, month - 2);
    const newMonth = newDate.getMonth() + 1;
    const newYear = newDate.getFullYear();
    setDate(`${newMonth.toString().padStart(2, '0')}/${newYear}`);
    setMonth(actualMonthWord(newMonth))
    console.log(date, 'prev');
  };

  const handleNextMonth = () => {
    const [month, year] = date.split('/').map(Number);
    const newDate = new Date(year, month);
    const newMonth = newDate.getMonth() + 1;
    const newYear = newDate.getFullYear();
    setDate(`${newMonth.toString().padStart(2, '0')}/${newYear}`);
    setMonth(actualMonthWord(newMonth))
    console.log(date, 'next');

  };

  const completeName = (person: string): string => {
    let complete = 'Guido'
    if (person === 'h') complete = 'Hugo'
    if (person === 'p') complete = 'Patricia'
    return complete
  }

  useEffect(() => {
    // setMonth(actualMonthWord)
    getBillsByPerson(person, date);
  }, [person, date, getBillsByPerson]);



  return (
    <Grid>
      <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Grid mb={10} display={"flex"} justifyContent={"space-around"} width={'100%'}>
          <Box>
            <Typography fontSize={35} fontWeight={'bold'} textAlign={"center"} color={"black"}>{month}</Typography>
          </Box>
          <Box>
            <Button
              sx={{ color: 'black', textTransform: 'none', m: 1, width: 23 }} color='info' variant='outlined'
              onClick={() => setPerson('g')}>Guido</Button>
            <Button
              sx={{ color: 'black', textTransform: 'none', m: 1, width: 23 }} color='info' variant='outlined'
              onClick={() => setPerson('h')}>Hugo</Button>
            <Button
              sx={{ color: 'black', textTransform: 'none', m: 1, width: 23 }} color='info' variant='outlined'
              onClick={() => setPerson('p')}>Patricia</Button>
          </Box>
        </Grid>
        <Typography variant="h3" textAlign={"center"} color={"black"}>{completeName(person)}</Typography>
        <BillingTable bills={bills} />
      </Grid>
      <Grid display={"flex"} justifyContent={"center"}>
        <Button
          onClick={handlePrevMonth}
          sx={{ m: '0px 15px', color: 'black' }} color='info' variant='outlined'><ArrowBackIosIcon /></Button>
        <Button
          onClick={handleNextMonth}
          disabled={(date === actualMonthYear()) ? true : false}
          sx={{ m: '0px 15px', color: 'black' }} color='info' variant='outlined'><ArrowForwardIosIcon /></Button>
      </Grid>
    </Grid>
  )
}

export default BillingPerson