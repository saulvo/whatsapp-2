import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>

      <LoginContainer>
        <Logo src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-2-1.png'/>
        <Button onClick={signIn} variant="outlined">Sign in with google</Button>
      </LoginContainer>
		</Container>
	);
}

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color:#fff;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0, 0.1);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
