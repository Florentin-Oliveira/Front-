import React from 'react';
import { Button, TextField, Link, Grid, Typography, Container, Box } from '@mui/material';

const ForgotPasswordPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
            <Grid item>
              <Link href="/" variant="body2">
                {"Voltar ao login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;/// deve ser mandando um email para user e ai podera redefinir a senha 

