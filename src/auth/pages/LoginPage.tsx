import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const LoginPage = () => {
    return (
        <Grid height="100vh" width="100vw" display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box border={"solid 2px #ffffff80"} borderRadius={5} p={7}>
                <Typography variant="h1" fontSize={35} textAlign={"center"} mb={5}>Login Page</Typography>
                <TextField size="small" label="Email" variant="outlined" color={"primary"} fullWidth sx={{
                    mb: 5,
                    '&:hover': {
                        borderColor: 'white', // Color fijo para el fondo al pasar el ratón
                    },
                    '& fieldset': {
                        borderColor: 'white', // Color fijo del borde
                    },
                    '& input': {
                        color: 'white', // Color fijo del texto
                    },
                    '& label': {
                        color: 'white',
                    },
                }} />
                <TextField size="small" label="Password" variant="outlined" type="password" fullWidth sx={{
                    mb: 5,
                    '&:hover': {
                        borderColor: 'white', // Color fijo para el fondo al pasar el ratón
                    },
                    '& fieldset': {
                        borderColor: 'white', // Color fijo del borde
                    },
                    '& input': {
                        color: 'white', // Color fijo del texto
                    },
                    '& label': {
                        color: 'white',
                    },
                }} />
                <Grid display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Link to={'/'}>
                        <Button size="medium" sx={{ textTransform: "none" }} color="secondary" variant="contained">
                            <Typography sx={{ textDecorationLine: "none" }}>Login</Typography>
                        </Button>
                    </Link>
                    <Link to={'/auth/register'}>
                        <Typography sx={{ textDecoration: "underline" }} color={"white"} fontSize={14}>Dont have an account? Register here.</Typography>
                    </Link>
                </Grid>
            </Box>
        </Grid>
    )
}

export default LoginPage