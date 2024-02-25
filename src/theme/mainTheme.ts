import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const mainTheme =  createTheme({
    palette: {
        primary: {
            main:"#ffffff80" // gris claro
        },
        secondary: {
            main:"#000000"
        },
        error: {
            main: red.A400

        }
    },
    typography: {
        fontFamily: 'Poppins',
    },
})