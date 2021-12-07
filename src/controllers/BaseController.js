import PARAMETERS from '../constants/generalParams.json';
import { onFacebookButtonPress } from '../firebase/auth';
import { setParameters } from '../middlewares/parameters/parametersMiddleware';
import { setUser } from '../middlewares/user/userMiddleware';
import { facebookLogin } from '../services/ServiceInteractor';

export const getParameters = ({ dispatch }) => {
    dispatch(setParameters(PARAMETERS));
}

export const loginWithPhone = ({ dispatch, state }) => {

}

export const handleLoginFacebook = async ({ dispatch, navigation }) => {
    try {
        let loginFacebook = await onFacebookButtonPress();
        const userFacebook = {
            firstName: loginFacebook.sign.additionalUserInfo.profile.first_name,
            lastName: loginFacebook.sign.additionalUserInfo.profile.last_name,
            email: loginFacebook.sign.additionalUserInfo.profile.email
        }
        dispatch(setUser(userFacebook))
        await facebookLogin({
            tokenFacebook: res.data.accessToken,
            expiredToken: res.data.expirationTime,
            uuid: res.sign.user.uid
        })
    }
    catch (error) {
        navigation.navigate('Register')
    }
}
