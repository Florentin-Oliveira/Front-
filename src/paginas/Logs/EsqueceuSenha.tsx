import React, { useState, useEffect } from 'react';
import { Button, TextField, Link, Grid, Typography, Container, Box, Stack, Alert, AlertTitle } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ForgotPasswordPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 7000); // Controla a duração do alerta
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {showAlert && (
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <Stack sx={{ width: '90%' }} spacing={2}>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              Digite seu e-mail para redefinir a senha.
            </Alert>
          </Stack>
        </Box>
      )}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 1, 
        }}
      >
        <Typography component="h1" variant="h5">
          Esqueceu a senha
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/login" variant="body2">
                {"Voltar ao login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
