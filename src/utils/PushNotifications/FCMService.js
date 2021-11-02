import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import Ticnow from '../../bridges/Ticnow';

const idModal = "push";
class FCMService {

    register = ({ onRegister, onNotification, onOpenNotification, onNotificationHiden, doLoginBiometric, isEnable }) => {
        this.checkPermission(onRegister)
        this.createNotificationListeners({ onRegister, onNotification, onOpenNotification, onNotificationHiden, doLoginBiometric, isEnable })
    }

    registerAppWithFCM = async () => {
        if (Platform.OS === 'ios') {
            // await messaging().registerDeviceForRemoteMessages();
            // await messaging().setAutoInitEnabled(true)
        }
    }

    checkPermission = (onRegister) => {
        messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    // User has permissions
                    this.getToken(onRegister)
                } else {
                    // User doesn't have permission
                    this.requestPermission(onRegister)
                }
            }).catch(error => {
                // console.log("[FCMService] Permission rejected ", error)
            })
    }

    getToken = (onRegister) => {
        messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    onRegister(fcmToken)
                } else {
                    // console.log("[FCMService] User does not have a device token")
                }
            }).catch(error => {
                // console.log("[FCMService] getToken rejected ", error)
            })
    }

    requestPermission = (onRegister) => {
        messaging().requestPermission()
            .then(() => {
                this.getToken(onRegister)
            }).catch(error => {
                // console.log("[FCMService] Request Permission rejected ", error)
            })
    }


    createNotificationListeners = ({ onRegister, onNotification, onOpenNotification, onNotificationHiden, doLoginBiometric, isEnable }) => {

        // When the application is running, but in the background
        messaging()
            .onNotificationOpenedApp(remoteMessage => {
                // console.log('[FCMService] onNotificationOpenedApp Notification caused app to open from background state:', remoteMessage)
                if (remoteMessage) {
                    const notification = remoteMessage.notification
                    onOpenNotification(notification)
                    // this.removeDeliveredNotification(notification.notificationId)
                }
            });

        // When the application is opened from a quit state.
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                // console.log('[FCMService] getInitialNotification Notification caused app to open from quit state:', remoteMessage)
                if (remoteMessage) {
                    const notification = remoteMessage.notification
                    /* 
                    se supone aqui validamos si se muestra el push o no y se le pasa a esta funcion de esta manera
                    --> onNotificationHiden(notification)
                    */
                    if (remoteMessage.data?.isIdNowSDKMsg) onNotificationHiden(notification)
                    else onOpenNotification(notification)
                    //  this.removeDeliveredNotification(notification.notificationId)
                }
            });

        // Foreground state messages
        this.messageListener = messaging().onMessage(async remoteMessage => {
            if (remoteMessage && isEnable) {
                if (remoteMessage.data.dataSdk) {
                    Ticnow.getMessage(remoteMessage.data.dataSdk.replace(/\n/g, "").replace(/\r/g, "").replace(/\s/g, "")).then(res => {
                        let sdkRes = JSON.parse(res)
                        if (sdkRes.privateParts.length >= 2) {
                            if (sdkRes.privateParts[1].value.includes("TOUCH"))
                                doLoginBiometric(sdkRes.privateParts[0].value)
                        } else if (remoteMessage.data.isIdNowSDKMsg) {
                            if (sdkRes.privateParts[0].value)
                                onNotification({ title: remoteMessage.data.title, body: sdkRes.privateParts[0].value, idModal })
                        }
                    }).catch(err => {
                        if (__DEV__) console.log("fcm message err", err);
                    })
                }
            }
        });

        // Triggered when have new token
        messaging().onTokenRefresh(fcmToken => {
            // console.log("[FCMService] New token refresh: ", fcmToken)
            onRegister(fcmToken)
        })

    }

    subscribeToTopic = async (topic) => {
        try {
            await messaging().subscribeToTopic(topic);
        } catch (error) {
            // console.log('[FCMService] Error to Subscribed to topic ', error)
        }
    }

    unSubscribeFromTopic = async (topic) => {
        try {
            await messaging().unsubscribeFromTopic(topic);
        } catch (error) {
            // console.log('[FCMService] Error to Unsubscribed to topic ', error)
        }
    }

    unRegister = () => {
        this.messageListener()
    }

    formatDataNotification = (data) => {
        const dataId = data.messageId || '0001';
        const { notification } = data;
        const title = Platform.OS == 'ios' ? notification.title : notification.android.title;
        const message = Platform.OS == 'ios' ? data.notification.body : data.notification.android.body;

        return { id: dataId, title, message, idModal };
    }

}

export const fcmService = new FCMService()


// {
//     "ios": {
//         "data": {
//             "authId": "5525c6d0-ddf0-4313-a5db-349d005b9b57",
//             "dataSdk": "XagcegNrmfV8wMqYSk4s/TqJiBC03y4I8/Z84nVib4ifd04rYtJ9E4QgJi2VBFQfBJlv/Uo1DALkBpt+z6ToASVG+zknrb7RVXNcDZVmWwulRUM/OpQlF62Ma5MFNGtY",
//             "isIdNowSDKMsg": "true",
//             "ttlMsg": "300000",
//             "typeAuth": "SMS OTP",
//             "uuidTrx": "2CD3F690-8066-4E81-A4D2-2C0A286B03211623708112547"
//         },
//         "messageId": "1623708224655720",
//         "notification": {
//             "ios": {
//                 "subtitle": "Mensaje de Davivienda"
//             },
//             "title": "Davivienda"
//         }
//     },
//     "android": {
//         "data": {
//             "authId": "5525c6d0-ddf0-4313-a5db-349d005b9b57",
//             "dataSdk": "aHzvoNoZLGHazXW52t+iVnWHCuADE6vgiFx1n45yCZoMcZdvDgqa79X20JPgX84x2GOECUmXCudH6FFLj5x9k+2OoHn/LP3UuaJqHKvmV3DwXlPNOatprUhg5+Saxb+A",
//             "isIdNowSDKMsg": "true",
//             "subtitle": "Mensaje de Davivienda",
//             "title": "Davivienda",
//             "ttlMsg": "300000",
//             "typeAuth": "SMS OTP",
//             "uuidTrx": "17bd359e54fee31etruetrue1623706372910ADR"
//         },
//         "from": "887494729471",
//         "messageId": "0: 1623706621552262%fea3eed6f9fd7ecd",
//         "sentTime": 1623706621525,
//         "ttl": 2419200
//     }
// }