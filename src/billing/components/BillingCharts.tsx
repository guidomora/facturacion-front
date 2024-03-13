import { Grid, Box, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie } from 'victory'
import { DataContext } from '../../context/DataBillingContext/DataContext'
import { Bill } from '../../context/DataBillingContext/DataProvider'

const BillingCharts = () => {
    const { bills, getData, getPaymentByYear, payments } = useContext(DataContext)
    const [selectedYears, setSelectedYears] = useState<string[]>([])
    const totalUnpaid = bills.filter((bill) => bill.paid === 'No').length
    const totalPaid = bills.filter((bill) => bill.paid === 'Yes').length
    let activeYears: string[] = []

    const splitByYear = () => {
        let uniqueYears: Set<string> = new Set();

        bills.forEach((bill) => {
            const year = bill.date.split('/')[2];
            uniqueYears.add(year);
        });

        const yearsArray = Array.from(uniqueYears);
        setSelectedYears(yearsArray);
        activeYears = yearsArray
    };



    useEffect(() => {
        getData()
        getPaymentByYear(2023)
        console.log(activeYears);

        // setTimeout(() => {
        splitByYear()
        // }, 1000);

    }, [])




    return (
        <Grid mt={10} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box p={5} height={300} width={'70%'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}
                boxShadow={7}
                sx={{ borderRadius: 5 }}>
                <Typography fontWeight={600} width={350} variant='h4' color='black'>Paid / Unpaid Bills</Typography>
                <Box height={300}>
                    <VictoryPie
                        colorScale={["#0288d1", "#ff0831"]}
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `${datum.y} bills`}
                        //   labelComponent={'hola'}
                        data={[
                            { x: 'Paid', y: totalPaid },
                            { x: 'Unpaid', y: totalUnpaid },
                        ]}
                    />
                </Box>
            </Box>
            <Box mt={10} p={5} height={500} width={'70%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}
                boxShadow={7}
                sx={{ borderRadius: 5 }}>
                <Box display={'flex'} justifyContent={'space-around'} width={'80%'}>
                    <Typography textAlign={'center'} fontWeight={600} maxWidth={450} variant='h4' color='black'>Total income each month</Typography>
                    <FormControl>
                        <InputLabel color='info' >Year</InputLabel>
                        <Select
                            size="small"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={first}
                            label="Month"
                            fullWidth
                            color='info'
                            // onChange={handleChange}
                            sx={{
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
                            {activeYears.map(year => 
                                <MenuItem>{year}</MenuItem>
                            )}
    
    {/* <MenuItem value={year}>{year}</MenuItem> */}
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
                            data={payments.map((payment) => ({ x: `${payment.month}/2024`, y: payment.total }))}
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