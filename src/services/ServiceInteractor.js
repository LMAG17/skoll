import { URLS } from "../constants/config";
import CONSUME from './ServiceFactory';

export async function login({
    username,
    password
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS.LOGIN,
                method: "POST",
                body: {
                    username,
                    password
                }
            }))
        } catch (error) {
            reject(error)
        }
    });
}

export async function register({
    firstname,
    lastName,
    email,
    cellPhone,
    cellPhonePrefix,
    city,
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS.REGISTER,
                method: "POST",
                body: {
                    firstname,
                    lastName,
                    email,
                    cellPhone,
                    cellPhonePrefix,
                    city,
                }
            }))
        } catch (error) {
            reject(error)
        }
    });
}

export async function generateOtp({
    transaction,
    sessionId
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS[transaction],
                method: "POST",
                body: { sessionId }
            }))
        } catch (error) {
            reject(error)
        }
    });
}

export async function validateOtp({
    transaction,
    sessionId,
    otp
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS[transaction],
                method: "POST",
                body: { sessionId, otp }
            }))
        } catch (error) {
            reject(error)
        }
    });
}

export async function finishRegistration({
    age,
    gender,
    interestGender,
    password,
    sessionId,
    timeExpiredToken,
    tokenFacebook,
    userId,
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS.FINISH_REGISTRATION,
                method: "POST",
                body: {
                    age,
                    gender,
                    interestGender,
                    password,
                    sessionId,
                    timeExpiredToken,
                    tokenFacebook,
                    userId,
                }
            }))
        } catch (error) {
            reject(error)
        }
    });
}

export async function facebookLogin({
    tokenFacebook,
    expiredToken,
    uuid,
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS.FACEBOOK_LOGIN,
                method: "POST",
                body: {
                    tokenFacebook,
                    expiredToken,
                    uuid,
                }
            }))
        } catch (error) {
            reject(error)
        }
    });
}

export async function getUserData({
    token,
}) {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await CONSUME({
                url: URLS.USER_DATA,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
        } catch (error) {
            reject(error)
        }
    });
}
