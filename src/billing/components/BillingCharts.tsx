import { Grid, Box, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie } from 'victory'
import { DataContext } from '../../context/DataBillingContext/DataContext'

const BillingCharts = () => {
    const { bills, getData, getPaymentByYear, payments } = useContext(DataContext)
    const totalUnpaid = bills.filter((bill) => bill.paid === 'No').length
    const totalPaid = bills.filter((bill) => bill.paid === 'Yes').length

    const splitByMonth = () => {
        let months: string[] = []
        bills.forEach((bill) => {
            const month = bill.date.split('/')[1]
            months.push(month)
        })
        console.log(months);
        return months
    }



    useEffect(() => {
        getPaymentByYear(2023)
        console.log(payments);

        getData()
    }, [])


    return (
        <Grid p={5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box p={5} width={'70%'} height={300} display={'flex'} justifyContent={'space-around'} alignItems={'center'}
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
            <Box mt={10} p={5} width={'70%'} height={300} display={'flex'} justifyContent={'space-around'} alignItems={'center'}
                boxShadow={7}
                sx={{ borderRadius: 5 }}>
                <Typography fontWeight={600} width={350} variant='h4' color='black'>Month History</Typography>
                <Box height={300}>
                    <VictoryChart height={500} width={1500}
                        domainPadding={{ x: 50, y: [0, 20] }}
                        scale={{ x: "time" }}
                    >
                        <VictoryBar
                            // dataComponent={
                            //     <Bar events={{ onMouseOver: handleMouseOver }} />
                            // }
                            labels={({ datum }) => `$${datum.y}`}
                            style={{
                                data: { fill: "#0288d1", width: 50 },
                                labels: { fontSize: '32px' }
                            }
                            }
                            // data={[
                            //     { x: 'January', y: 1 },
                            //     { x: 'February', y: 2 },
                            //     { x: 'March', y: 3 },
                            //     { x: 'April', y: 4 },
                            //     { x: 'May', y: 5 },
                            //     { x: 'June', y: 6 },
                            //     { x: 'July', y: 7 },
                            //     { x: 'August', y: 8 },
                            //     { x: 'September', y: 9 },
                            //     { x: 'October', y: 10 },
                            //     { x: 'November', y: 11 },
                            //     { x: 'Dicember', y: 12 }
                            // ]}
                            data={payments.map((payment) => ({ x: `${payment.month}/2024`, y: payment.total }))}
                        />
                        <VictoryAxis
                            style={{
                                axisLabel: { fontSize: '25px', padding: 30 },
                                tickLabels: { fontSize: '25px' }
                            }}
                        />

                        {/* Configurar el eje Y */}
                        <VictoryAxis    
                            dependentAxis={false}
                            style={{
                                axisLabel: { fontSize: '25px' },
                                tickLabels: { fontSize: '25px'}
                            }}
                        />
                    </VictoryChart>
                </Box>
            </Box>
        </Grid>
    )
}

export default BillingCharts