import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { onFacebookButtonPress } from '../../../firebase/auth';
import { setUser } from '../../../middlewares/user/userMiddleware';
import { facebookLogin, login as loginService } from '../../../services/ServiceInteractor';
import { FontSizeRP, HeightDP, WidthDP } from '../../../utils/CalculateSize';

export default function LoginScreen(props) {

    const [loginPhone, setLoginPhone] = useState(false);

    const [data, setData] = useState({});

    const parameters = useSelector(state => state.parameters)

    const dispatch = useDispatch();

    const { login, appTheme } = parameters;

    const icons = {
        apple: require('../../../assets/icon/apple.png'),
        facebook: require('../../../assets/icon/facebook.png'),
        phone: require('../../../assets/icon/phone.png'),
    }

    const handleChange = (key, text) => {
        setData({
            ...data,
            [key]: text
        })
    }

    const handlerGetFacebook = async (data) => {
        try {
            let getFacebook = await facebookLogin(data)
            console.log("getFacebook", getFacebook);
        } catch (error) {
            console.log("ERROR DE VISTA", error);
            props.navigation.navigate('Register')
        }
    }

    const handleLoginFacebook = async () => {
        onFacebookButtonPress().then((res) => {
            const users = {
                firstName: res.sign.additionalUserInfo.profile.first_name,
                lastName: res.sign.additionalUserInfo.profile.last_name,
                email: res.sign.additionalUserInfo.profile.email
            }
            dispatch(setUser(users))
            handlerGetFacebook({
                tokenFacebook: res.data.accessToken,
                expiredToken: res.data.expirationTime,
                uuid: res.sign.user.uid
            })
        })
    }

    const handleLoginType = (action) => {
        switch (action.type) {
            case 'login':
                if (action.payload == "facebook") {
                    handleLoginFacebook()
                }
                else if (action.payload == "apple") {
                    console.log("Login con apple")
                }
                break;
            case 'action':
                if (action.payload == "phoneForm") {
                    setLoginPhone(true)
                }
                break;
        }
    }

    const handleLogin = async () => {
        loginService(data)
    }

    return (
        <View style={[styles.screen, { backgroundColor: appTheme.background }]}>
            <Image
                style={styles.image}
                source={require("../../../assets/img/login.png")}
            />
            <Text style={styles.text}>{login.title}</Text>
            <Text style={styles.helpText}>{login.subtitle}</Text>
            <View style={styles.categories}>
                {
                    login.categories.map((item, i) =>
                        <LinearGradient
                            key={item.title}
                            colors={["#E49414", "#E9A83C"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.icon}>
                            <Text>{i}</Text>
                        </LinearGradient>
                    )
                }
            </View>
            <View>
                {
                    login.buttons.map(button =>
                        <TouchableOpacity
                            style={[styles.buttonStyle, { backgroundColor: button.backgroundColor }]}
                            key={button.title}
                            onPress={() => {
                                console.log("xddd")
                                handleLoginType(button.action)
                            }}>
                            <View style={styles.buttonContainerStyle}>
                                <Image
                                    style={styles.buttonImage}
                                    source={icons[button.icon]}
                                />
                                <Text style={[styles.buttonText, { color: button.textColor }]}>{button.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
            {loginPhone ?
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ ...styles.label, }}>Telefono</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', width: '80%', height: 40, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../../assets/img/smartphone.png')} style={{ marginLeft: 30 }} />
                        <TextInput style={{ width: '100%' }} onChangeText={text => handleChange('username', text)} textContentType={'telephoneNumber'} />
                    </View>
                    <Text style={styles.label}>Contraseña</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', width: '80%', height: 40, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput style={{ width: '100%' }} onChangeText={text => handleChange('password', text)} secureTextEntry={true} />
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
                            <Text style={styles.label}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null
            }
            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordAsk}>
                    {login.forgotPasswordAsk}
                </Text>
                <Text style={styles.forgotPasswordLink}>
                    {login.forgotPasswordLink}
                </Text>
            </View>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Register') }} >
                <Text style={styles.forgotPasswordLink}>
                    {login.registerLink}
                </Text>
            </TouchableOpacity>
        </View >
    );
}
const styles = StyleSheet.create({
    label: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: FontSizeRP(18),
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: WidthDP(200),
        height: WidthDP(200),
    },
    text: {
        color: '#fff',
        fontFamily: 'Alegreya-Italic',
        fontSize: FontSizeRP(72)
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpText: {
        fontFamily: 'Andada SC',
        fontSize: FontSizeRP(18),
        fontWeight: '400',
        textAlign: 'left',
        lineHeight: HeightDP(24),
        letterSpacing: 0,
        color: '#E2A300',
        borderColor: '#000000',
        textShadowColor: '#000000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 40,
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        height: WidthDP(32),
        width: WidthDP(32),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: WidthDP(16)
    },
    forgotPasswordContainer: {
        width: '65%',
        marginVertical: HeightDP(16),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    forgotPasswordAsk: {
        fontFamily: 'Alike',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: FontSizeRP(12),
        lineHeight: HeightDP(15),
        color: '#FFFFFF'
    },
    forgotPasswordLink: {
        fontFamily: 'Alike',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: FontSizeRP(12),
        lineHeight: HeightDP(15),
        color: '#C27406'
    },
    btn: {
        backgroundColor: '#E8A537',
        width: WidthDP(250),
        height: HeightDP(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonStyle: {
        borderRadius: 20,
        marginVertical: HeightDP(10),
        paddingVertical: HeightDP(10),
        paddingHorizontal: WidthDP(40),
    },
    buttonImage: {
        width: WidthDP(20),
        height: WidthDP(20),
        marginHorizontal: WidthDP(8),
    },
    buttonText: {
        fontFamily: 'Abhaya Libre ExtraBold',
        fontWeight: '800',
        textAlign: 'left',
        fontSize: FontSizeRP(18),
    }
});