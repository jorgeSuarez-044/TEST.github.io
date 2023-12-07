import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await login(username, password);

      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error al intentar iniciar sesión');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h2" variant="h5">
          Login
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography variant="body2" style={{ color: 'red' }}>{error}</Typography>}
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 20 }}>
          Iniciar sesión
        </Button>
        <Typography variant="body2" style={{ marginTop: 20 }}>
          ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
