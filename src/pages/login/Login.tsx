import React from "react";
import useLogin from "./useLogin";
import Button from 'components/Button';

function Login() {
  const { redirectToLogin } = useLogin();

  return (
    <div>
      <Button onClick={redirectToLogin}/>
    </div>
  );
}

export default Login;
