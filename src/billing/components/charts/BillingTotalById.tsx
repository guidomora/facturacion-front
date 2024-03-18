import { Grid, Box, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/DataBillingContext/DataContext"
import { VictoryAxis, VictoryBar, VictoryChart } from "victory"



const BillingTotalById = () => {
  const { getData, bills, secondPayments, getTotalByIdAndYear } = useContext(DataContext)
  const [selectedYear, setSelectedYear] = useState('2024')
  const [avalibleYears, setAvalibleYears] = useState<string[]>([])

  const inputChange = ({ target }: SelectChangeEvent<string>) => {
    setSelectedYear(target.value)
  };

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
    getTotalByIdAndYear('G', 2024)

  }, [])

  return (
    <Grid>
      <Box p={5} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
        boxShadow={7} sx={{ borderRadius: 5 }}>
        <Box>
          <FormControl size="small" sx={{ width: '100%', display: "flex", flexDirection: "row" }}>
            <FormControl size="small" >
              <InputLabel color='info' >Select year</InputLabel>
              <Select
                value={selectedYear}
                fullWidth
                label="Select year"
                color='info'
                onChange={inputChange}
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
              <InputLabel color='info' >Select Id</InputLabel>
              <Select
                value={selectedYear}
                fullWidth
                label="Select Id"
                color='info'
                onChange={inputChange}
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
            <Button variant='outlined' color="info"> Search</Button>
          </FormControl>
        </Box>
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
              data={secondPayments.map((payment) => ({ x: `${payment.month}/2024`, y: payment.total }))}
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
          B</Box>
      </Box>
    </Grid>
  )
}

export default BillingTotalById