import FormRegister from '../Screens/Authentication/FormRegister';
import Login from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';
import ScreenOtpEmail from '../Screens/Authentication/ScreenOtpEmail';
import HomeScreen from '../Screens/HomeScreen';
import Main from '../Screens/Main';
import SplashScreen from '../Screens/SplashScreen';
import Terms from '../Screens/Terms';
import Testscreen from '../Screens/Testscreen';
import Departaments from '../Screens/Departaments';
import HomeTabs from './HomeTabs';

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
    {
        path: "Testscreen",
        component: Testscreen
    },
    {
        path: "Departaments",
        component: Departaments
    },
    {
        path: "Terms",
        component: Terms
    },
]