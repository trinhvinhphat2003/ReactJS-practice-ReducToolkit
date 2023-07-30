import "./Login.scss"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import isLoginnedSlice from "../../redux/reducers/isLogginnedSlice";
import { login } from "../../redux/reducers/isLogginnedSlice";

const Login = () => {

    const navigation = useNavigate();

    const dispatch = useDispatch()

    return (
        <div className="login-container">
            <span className="google-login-btn">
                <GoogleOAuthProvider clientId="753265686396-kqs86rsujp7lfl1sppoqic5cfe7vgn2h.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const detail = jwt_decode(credentialResponse.credential)
                            localStorage.setItem("user", JSON.stringify(detail));
                            console.log(detail);
                            console.log(credentialResponse);
                            dispatch(
                                login()
                            )
                            navigation("/film-managerment");
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        theme="filled_blue"
                    />
                </GoogleOAuthProvider>
            </span>
        </div>
    )
}

export default Login;