import { Grid, Box, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie } from 'victory'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { UiContext } from '../../context/UibillingContext/UiContext'
import BillingUnpaid from './BillingUnpaid'



const BillingCharts = () => {
    const { bills, getData, getPaymentByYear, payments } = useContext(DataContext)
    const {closeModal} = useContext(UiContext)
    const [avalibleYears, setAvalibleYears] = useState<string[]>([])
    const totalUnpaid = bills.filter((bill) => bill.paid === 'No').length
    const totalPaid = bills.filter((bill) => bill.paid === 'Yes').length
    const [selectedYear, setSelectedYear] = useState('2024')
    
    const inputChange = ({ target}: SelectChangeEvent<string> ) => {
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
        getData();
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
            <Box p={5} height={300} width={'70%'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}
                boxShadow={7}
                sx={{ borderRadius: 5 }}>
                <Typography fontWeight={600} width={350} variant='h4' color='black'>Paid / Unpaid Bills</Typography>
                <Box height={300}>
                    <VictoryPie
                        colorScale={["#0288d1", "#ff0831"]}
                        style={{ labels: { fill: "black", fontSize:'22px' } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `${datum.y} bills`}
                        data={[
                            { x: 'Paid', y: totalPaid },
                            { x: 'Unpaid', y: totalUnpaid },
                        ]}
                    />
                </Box>
            </Box>

            {/* Unpaid bills */}
            <BillingUnpaid />

            {/* Bar chart */}
            <Box mt={10} p={5} height={500} width={'70%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
                boxShadow={7}
                sx={{ borderRadius: 5 }}>
                <Box display={'flex'} justifyContent={'space-between'} width={'80%'}>
                    <Typography textAlign={'center'} fontWeight={600} maxWidth={450} variant='h4' color='black'>Total income each month</Typography>
                    <FormControl size="small">
                        <InputLabel  color='info' >Select year</InputLabel>
                        <Select
                            value={selectedYear}
                            fullWidth
                            label="Select year"
                            color='info'
                            onChange={inputChange}
                            sx={{
                                width:150,
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