import React from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

// Definir el estilo del botón personalizado
const CustomButton = styled(Button)({
  backgroundColor: '#CFCDD2',      // Cambiar el color de fondo
  color: 'black',  // Cambiar el color del texto
  padding: '1rem',  
  fontWeight: 'bold',  
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#EBCEB5',  // Cambiar el color de fondo en el hover
  },
});
export default CustomButton;