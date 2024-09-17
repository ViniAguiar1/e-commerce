import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api.spartacusprimetobacco.com.br/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Login realizado com sucesso!',
          text: 'Você será redirecionado para a página inicial.',
        });
        navigate('/home');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro de autenticação',
          text: 'Credenciais inválidas, por favor tente novamente.',
        });
      }
    } catch(error) {
      console.error(error); // Opcional: Logar o erro no console
    
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: `Ocorreu um erro: ${error.message}. Tente novamente mais tarde.`,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <h1>Sistema</h1>
        <button>Read More</button>
      </div>
      <div className="right-side">
        <h2>Seja muito bem-vindo</h2>
        <div className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
