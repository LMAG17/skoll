import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';
import ScreenOtpEmail from '../Screens/Authentication/ScreenOtpEmail';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import FormRegister from '../Screens/FormRegister'
import HomeTabs from './HomeTabs'
import LoginFacebook from '../Screens/LoginFacebook'

const Stack = createStackNavigator();
var timerCloseSessionMain;
var closeSessionInactiveUser;
var loginFetch = false
export default AppNAvigator = () => {

  // const navigatorRef = React.useRef(null)
  // const dispatch = useDispatch();
  // const sessionData = useSelector((state) => state.sessID);
  // const generalParams = useSelector(state => state.generalParams)
  // const userInfo = useSelector((state) => state.user);
  // const activeHU = useSelector((state) => state.activeHU);

  // const showPopUpNotification = ({ idModal = "push", title, body }) => {
  //   dispatch(
  //     showPopUp({
  //       ...generalParams.generalPopUps.genericError,
  //       isVisible: true,
  //       title: title,
  //       description: body,
  //       idModal
  //     }),
  //   );
  // }

  // React.useEffect(() => {

  //   fcmService.registerAppWithFCM()
  //   fcmService.register({ onRegister, onNotification, onOpenNotification, onNotificationHiden, doLoginBiometric, isEnable: activeHU.isNotificationsEnable })
  //   localNotificationService.configure(onOpenNotification)

  //   if (env.name == 'dev') fcmService.subscribeToTopic('testTopicDev')
  //   else fcmService.unSubscribeFromTopic('testTopicDev')

  //   function onRegister(/*token*/) { /*console.log("[App] onRegister: ", token)*/ }

  //   function onNotification(dataPush) {
  //     const options = {
  //       soundName: 'default',
  //       playSound: true,
  //       // largeIcon: 'ic_launcher', // add icon large for Android (Link: app/src/main/mipmap)
  //       // smallIcon: 'ic_launcher' // add icon small for Android (Link: app/src/main/mipmap)
  //     }
  //     localNotificationService.showNotification(
  //       "00001",
  //       dataPush?.title,
  //       dataPush?.body,
  //       dataPush,
  //       options
  //     )
  //   }

  //   function onOpenNotification(dataPush) {
  //     showPopUpNotification(dataPush)
  //   }

  //   function onNotificationHiden(dataPush) {
  //     // Ticnow.getMessage(dataPush.data.dataSdk)
  //     //   .then(res => {
  //     //     if (__DEV__) console.log("ios Ticnow.getMessage res", res);
  //     //   }).catch(err => {
  //     //     if (__DEV__) console.log("[Error Ticnow.getMessage] ", err);
  //     //   })
  //   }

  //   return () => {
  //     fcmService.unRegister()
  //     localNotificationService.unregister()
  //   }

  // }, [sessionData])


  // const loginScreen = (props) => (userInfo.params[0].numeroDocumento !== 'NN' && userInfo.params[0].show)
  //   ? <LoginWDataScreen />
  //   : <LoginScreen {...props} />;

  console.log("fweronwkn");

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} >
        <Stack.Screen
          name="LoginFacebook"
          options={{ gestureEnabled: false }}
          component={LoginFacebook}
        />
        <Stack.Screen
          name="Register"
          options={{ gestureEnabled: false }}
          component={Register}
        />
        <Stack.Screen
          name="ValidateOtpEmail"
          options={{ gestureEnabled: false }}
          component={ScreenOtpEmail}
        />

        {/*   <Stack.Screen
          name="Pantalla Principal"
          options={{ gestureEnabled: false }}
        >
          {props => activeHU.isOnboardingEnable ? < MainTabs {...props} /> : loginScreen(props)}
        </Stack.Screen> */}
        <Stack.Screen
          name="HomeTabs"
          options={{ gestureEnabled: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="SplashScreen"
          options={{ gestureEnabled: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{ gestureEnabled: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// export default () => {

//   const dispatch = useDispatch();
//   const { totalSession, inactiveUser } = useSelector((state) => state.generalParams.timeToCloseSession);
//   const [ActiveUser, setActiveUser] = React.useState(true)
//   const timer = 10000;
//   const safeZone = useSelector((state) => state.safeZone);
//   const [safeZone2, setSafeZone2] = React.useState(useSelector((state) => state.safeZone))

//   const fBackgroundTimer = (timePopup, totalTime, clearTime) => {
//     return BackgroundTimer.setTimeout(() => {
//       BackgroundTimer.clearTimeout(clearTime)
//       // if (isActive.isSessionManagerEnable === true) { Interruptor del checkeo de actividad
//       dispatch(setSafeZone(false))
//       dispatch(setCurrentPosition("forcelogout"))
//       dispatch(showPopUp(timePopup))
//       // }
//     }, totalTime)
//   }


//   React.useEffect(() => {
//     setSafeZone2(safeZone)
//     BackgroundTimer.clearTimeout(timerCloseSessionMain)
//     if (safeZone)
//       timerCloseSessionMain = fBackgroundTimer(totalSession.popup, totalSession.time, timerCloseSessionMain);
//     else
//       BackgroundTimer.clearTimeout(timerCloseSessionMain)
//     return () => BackgroundTimer.clearTimeout(timerCloseSessionMain)
//   }, [safeZone])

//   const checkActivityToCloseSession = (active) => {
//     setActiveUser(active);
//     if (active) BackgroundTimer.clearTimeout(closeSessionInactiveUser);
//     else {
//       setSafeZone2(prevSafeZone2 => {
//         if (safeZone) {
//           closeSessionInactiveUser = fBackgroundTimer(inactiveUser.popup, inactiveUser.time, closeSessionInactiveUser);
//           if (__DEV__) console.log(safeZone2);
//         }
//         return prevSafeZone2
//       })
//     }
//   }

//   const popup = useSelector((state) => state.popup);

//   return (
//     <UserInactivity
//       style={{ flex: 1 }}
//       isActive={ActiveUser === true && safeZone === true}
//       timeForInactivity={timer}
//       timeoutHandler={reactNativeBackgroundTimer}
//       onAction={checkActivityToCloseSession}>

//       <AppNAvigator />

//       {
//         popup.isVisible && <View
//           style={{
//             top: 0,
//             bottom: 0,
//             right: 0,
//             left: 0,
//             position: 'absolute',
//             backgroundColor: colors.blur
//           }}
//         />
//       }
//     </UserInactivity>
//   )
// }