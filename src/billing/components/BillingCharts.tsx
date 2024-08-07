import { Grid, Box, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { UiContext } from '../../context/UibillingContext/UiContext'
import BillingUnpaid from './charts/BillingUnpaid'
// import SquareIcon from '@mui/icons-material/Square';
import BillingTotalById from './charts/BillingTotalById'




const BillingCharts = () => {
    const { bills, getPaymentByYear, payments } = useContext(DataContext)
    const { closeModal, modalState } = useContext(UiContext)
    const [avalibleYears, setAvalibleYears] = useState<string[]>([])
    // const totalUnpaid = bills.filter((bill) => bill.paid === 'No').length
    // const totalPaid = bills.filter((bill) => bill.paid === 'Yes').length
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString())

    const inputChange = ({ target }: SelectChangeEvent<string>) => {
        setSelectedYear(target.value)
    };

    // Gets all the years from the bills
    const splitByYear = () => {
        let uniqueYears: Set<string> = new Set(); // Set to avoid duplicates

        // gets the year from the date
        bills.forEach((bill) => {
            if (bill.date) {
                const year = bill.date.split('/')[2];
                uniqueYears.add(year);
            }
        });

        // converts the set to an array
        const yearsArray = Array.from(uniqueYears);
        setAvalibleYears(yearsArray); // sets the years to the state
    };



    useEffect(() => {
        getPaymentByYear(Number(selectedYear)); // sends the year to get the payments  
    }, [selectedYear, closeModal]);

    useEffect(() => {
        if (bills.length > 0) {
            splitByYear();
        }
    }, [bills]);




    return (
        // Donut chart
        <Grid mt={10} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box p={5} width={'100%'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}
                sx={{ borderRadius: 5 }}>
                <BillingUnpaid />
            </Box>
            
            {/* Bar by id */}
            <BillingTotalById />

            {/* Bar chart */}
            <Box mt={10} p={5} height={500} width={'70%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
                sx={{ borderRadius: 5, boxShadow:"0px 0px 28px 5px rgba(0, 0, 0, 0.3)" }}>
                <Box display={'flex'} justifyContent={'space-between'} width={'80%'}>
                    <Typography fontSize={25} textAlign={'center'} fontWeight={600} maxWidth={650} variant='h4' color='black'>
                        {(modalState.english === false) ? 'Total payments by month' : 'Facturado cada mes'}
                    </Typography>
                    <FormControl size="small">
                        <InputLabel color='info' >
                            {(modalState.english === false) ? 'Select year' : 'Selecciona año'}
                        </InputLabel>
                        <Select
                            value={selectedYear}
                            fullWidth
                            label={(modalState.english === false) ? 'Select year' : 'Selecciona año'}
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
                            data={payments.map((payment) => ({ x: `${payment.month}/${selectedYear}`, y: payment.total }))}
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

export default BillingCharts