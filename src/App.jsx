import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, preencha todos os campos!",
      });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      senha: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.spartacusprimetobacco.com.br/api/usuarios/login", requestOptions)
      .then((response) => response.json())  // Use .json() para decodificar o retorno da API
      .then((result) => {
        console.log(result);  // Checar o resultado no console
        if (result.status === 1) {
          Swal.fire({
            icon: "success",
            title: "Login bem-sucedido",
            text: "Redirecionando para a página inicial...",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            navigate("/home");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro no login",
            text: "Credenciais incorretas. Tente novamente!",
          });
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        Swal.fire({
          icon: "error",
          title: "Erro no servidor",
          text: "Houve um erro ao se conectar ao servidor. Tente novamente mais tarde.",
        });
      });
  }

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
