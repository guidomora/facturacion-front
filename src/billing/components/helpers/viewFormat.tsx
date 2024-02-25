import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { useState } from 'react'

const ViewFormat = () => {
    const [first, setfirst] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setfirst(event.target.value);
    };
  return (
    <Box display={"flex"} justifyContent={"space-around"} width={250} alignItems={"center"} height={'100%'} padding={'0 25px'}>
                <Typography mr={5}>View</Typography>
                <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={first}
                    label="Month"
                    fullWidth
                    onChange={handleChange}
                    sx={{ backgroundColor:'#ffffff',
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
                    <MenuItem value={10}>Month</MenuItem>
                    <MenuItem value={20}>Week</MenuItem>
                </Select>
            </Box>
  )
}

export default ViewFormat