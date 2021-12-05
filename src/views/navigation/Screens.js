import Login from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';
import ScreenOtpEmail from '../Screens/Authentication/ScreenOtpEmail';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import FormRegister from '../Screens/FormRegister'
import HomeTabs from './HomeTabs'
import LoginFacebook from '../Screens/LoginFacebook'
import Main from '../Screens/Main';

export default [
    {
        path: "Main",
        component: Main
    },
    {
        path: "Login",
        component: Login
    },
    {
        path: "Register",
        component: Register
    },
    {
        path: "FormRegister",
        component: FormRegister
    },
    {
        path: "LoginFacebook",
        component: LoginFacebook
    },
    {
        path: "ValidateOtpEmail",
        component: ScreenOtpEmail
    },
    {
        path: "HomeTabs",
        component: HomeTabs
    },
    {
        path: "SplashScreen",
        component: SplashScreen
    },
    {
        path: "HomeScreen",
        component: HomeScreen
    },

]