// authService.js
export const login = (username, password) => {
    // Simula el consumo de una API
    return new Promise((resolve, reject) => {
      // Este ejemplo simula una autenticación exitosa si el nombre de usuario es "usuario" y la contraseña es "contraseña".
      if (username === 'usuario' && password === 'contraseña') {
        resolve({ success: true, user: { username: 'usuario' } });
      } else {
        reject({ success: false, error: 'Credenciales incorrectas' });
      }
    });
  };
  