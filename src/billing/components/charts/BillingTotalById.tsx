import { Grid, Box, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem, Button, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/DataBillingContext/DataContext"
import { VictoryAxis, VictoryBar, VictoryChart } from "victory"
import { UiContext } from "../../../context/UibillingContext/UiContext"



const BillingTotalById = () => {
  const { bills, secondPayments, getTotalByIdAndYear } = useContext(DataContext)
  const { modalState } = useContext(UiContext)
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedId, setSelectedId] = useState('G')
  const [avalibleYears, setAvalibleYears] = useState<string[]>([])

  const inputChangeYear = ({ target }: SelectChangeEvent<string>) => {
    setSelectedYear(target.value)
  };

  const inputChangeId = ({ target }: SelectChangeEvent<string>) => {
    setSelectedId(target.value)
  };

  const handleChange = () => {
    getTotalByIdAndYear(selectedId, Number(selectedYear))
  }

  // Gets all the years from the bills
  const splitByYear = () => {
    let uniqueYears: Set<string> = new Set(); // Set to avoid duplicates

    bills.forEach((bill) => {
      const year = bill.date.split('/')[2];
      uniqueYears.add(year);
    });

    const yearsArray = Array.from(uniqueYears);
    setAvalibleYears(yearsArray);
  };

  useEffect(() => {
    if (bills.length > 0) {
      splitByYear();
    }
  }, [bills]);

  useEffect(() => {
    getTotalByIdAndYear(selectedId, Number(selectedYear))

  }, [])

  return (
    <Grid width={'70%'}>
      <Box p={5} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
        boxShadow={7} sx={{ borderRadius: 5 }}>
        <Box display={"flex"} justifyContent={"space-evenly"} width={'100%'} alignItems={"center"}>
          <Typography fontSize={25} fontWeight={600} variant='h4' color='black' >
            {(modalState.english === false) ? 'Total by Id' : 'Total por Id'}
          </Typography>
          <FormControl size="small" sx={{ display: "flex", flexDirection: "row", justifyContent:'space-evenly', width:'80%' }}>
            <FormControl size="small">
              <InputLabel color='info' >
                {(modalState.english === false) ? 'Select year' : 'Selecciona el año'}
              </InputLabel>
              <Select
                value={selectedYear}
                fullWidth
                label={(modalState.english === false) ? 'Select year' : 'Selecciona el año'}
                color='info'
                onChange={inputChangeYear}
                sx={{
                  width: 150,
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    borderColor: 'black', // Color fijo para el fondo al pasar el ratón
                  },
                  '& fieldset': {
                    borderColor: 'black', // Color fijo del borde
                  },
                  '& .MuiSelect-select': {
                    color: 'black', // Cambia el color del texto seleccionado
                  },
                  '& .MuiPaper-root': {
                    backgroundColor: 'black', // Cambia el color de fondo del menú desplegable
                  },
                }}
              >
                {/* Maps the years that are avalible  */}
                {avalibleYears.map((year, index) =>
                  <MenuItem key={index} value={year}>{year}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl size="small" >
              <InputLabel color='info' >
                {(modalState.english === false) ? 'Select Id' : 'Selecciona Id'}
              </InputLabel>
              <Select
                value={selectedId}
                fullWidth
                label={(modalState.english === false) ? 'Select Id' : 'Selecciona Id'}
                color='info'
                onChange={inputChangeId}
                sx={{
                  width: 150,
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    borderColor: 'black', // Color fijo para el fondo al pasar el ratón
                  },
                  '& fieldset': {
                    borderColor: 'black', // Color fijo del borde
                  },
                  '& .MuiSelect-select': {
                    color: 'black', // Cambia el color del texto seleccionado
                  },
                  '& .MuiPaper-root': {
                    backgroundColor: 'black', // Cambia el color de fondo del menú desplegable
                  },
                }}
              >
                  <MenuItem value={'G'}>G</MenuItem>
                  <MenuItem value={'P'}>P</MenuItem>
                  <MenuItem value={'H'}>H</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={handleChange} sx={{textTransform:'none'}} variant='outlined' color="info">
              {(modalState.english === false) ? 'Search' : 'Buscar'}
            </Button>
          </FormControl>
        </Box>

        {/* Chart */}
        <Box height={300} width={'100%'}>
          <VictoryChart height={500} width={1500}
            domainPadding={{ x: 50, y: [0, 20] }}
            scale={{ x: "time" }}
          >
            <VictoryBar
              labels={({ datum }) => `$${datum.y}`}
              style={{
                data: { fill: "#0288d1", width: 50 },
                labels: { fontSize: '32px' }
              }
              }
              data={secondPayments.map((payment) => ({ x: `${payment.month}/${selectedYear}`, y: payment.total }))}
            />
            <VictoryAxis
              style={{
                axisLabel: { fontSize: '25px' },
                tickLabels: { fontSize: '25px' }
              }}
            />

            {/* Configurar el eje Y */}
            <VictoryAxis
              dependentAxis={false}
              style={{
                axisLabel: { fontSize: '25px' },
                tickLabels: { fontSize: '25px' }
              }}
            />
          </VictoryChart>
          </Box>
      </Box>
    </Grid>
  )
}

export default BillingTotalById