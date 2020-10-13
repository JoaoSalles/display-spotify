import React from "react";
import useLogin from "./useLogin";
import Button from "components/Button";
import { LoginElement, LoginTextElement } from "./styles";

function Login() {
  const { redirectToLogin } = useLogin();

  return (
    <LoginElement>
      <LoginTextElement>
        <p>Enquanto você espera seu pedido, que tal escutarmos uma música?</p>
        <Button onClick={redirectToLogin} />
      </LoginTextElement>
    </LoginElement>
  );
}

export default Login;
