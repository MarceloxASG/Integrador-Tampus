import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginForm from "./components/LoginForm";


function Login() {

  return (
    <>
      <div>
        <GoogleOAuthProvider clientId="788968571780-fl919dgmr5ndh3ggh64mn33i42h4lc2c.apps.googleusercontent.com">
          <LoginForm/>
        </GoogleOAuthProvider>
      </div>
    </>
  )
}

export default Login;