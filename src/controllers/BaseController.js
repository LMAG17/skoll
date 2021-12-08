import PARAMETERS from '../constants/generalParams.json';
import { onFacebookButtonPress } from '../firebase/auth';
import { setParameters } from '../middlewares/parameters/parametersMiddleware';
import { setToken } from '../middlewares/token/tokenMiddleware';
import { setUser } from '../middlewares/user/userMiddleware';
import { departaments, facebookLogin, getUserData } from '../services/ServiceInteractor';

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
            email: loginFacebook.sign.additionalUserInfo.profile.email,
            tokenFacebook: loginFacebook.data.accessToken,
            timeExpiredToken: loginFacebook.data.expirationTime,
            userId: loginFacebook.sign.user.uid,
        }
        dispatch(setUser(userFacebook))
        const facebookResponse = await facebookLogin({
            tokenFacebook: loginFacebook.data.accessToken,
            expiredToken: loginFacebook.data.expirationTime,
            uuid: loginFacebook.sign.user.uid
        })
        handleGetData({ dispatch, token: facebookResponse.data.token, navigation });
    }
    catch (error) {
        navigation.navigate('Register')
    }
}

export const getDepartments = async () => {
    const serviceResponse = await departaments()
    const newDepartments = await Promise.all(
        Object.keys(serviceResponse.data.colombia).map(key => {
            return ({
                name: key,
                cities: serviceResponse.data.colombia[key]
            })
        })
    )
    return newDepartments
}

export const handleGetData = async ({ dispatch, token, navigation }) => {
    dispatch(setToken(token))
    let clientData = await getUserData({ token })
    dispatch(setUser({
        ...clientData.data,
    }))
    navigation.navigate('HomeScreen')
}