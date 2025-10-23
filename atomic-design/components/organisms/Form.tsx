'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Form() {
  return (
    <Box>
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', margin: 'auto' ,padding:4, mt:2}}>

        {/* Atomo */}
        <Typography variant="h4" gutterBottom>
          Cadastrar
        </Typography>

        {/* Molécula = label + input */}
        <TextField id="standard-basic" label="Nome" variant="standard" sx={{mt:2}}/> 

        {/* Molécula = label + input */}
        <TextField id="standard-basic" label="Email" variant="standard" sx={{mt:2}} /> 

        {/* Molécula = label + input */}
        <TextField id="standard-basic" label="Senha" variant="standard" sx={{mt:2}} /> 

        {/* Atomo */}
        <Button variant="contained" sx={{mt:6}}>Cadastrar</Button>
      </Paper>
    </Box>
  );
}
