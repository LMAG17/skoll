import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../../constants/config';
import { onFacebookButtonPress } from '../../../firebase/auth';
import { generic } from '../../../utils/Services';
import { setUser } from '../../../middlewares/user/userMiddleware'


const apple = require('../../../assets/icon/apple.png');
const facebook = require('../../../assets/icon/facebook.png');
const phone = require('../../../assets/icon/phone.png');

const ScreenWidth = Dimensions.get("window").width;

const buttonStyle = {
    width: 302,
    borderRadius: 20,
    padding: 8,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
}
const buttonRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
}

const textStyle = {
    width: '90%',
    fontFamily: 'Abhaya Libre ExtraBold',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'left',
}

const imageStyle = {
    width: 20,
    height: 20
}

const buttons = [
    {
        title: "Continúa con apple",
        icon: apple,
        buttonRowStyle: {
            ...buttonRowStyle
        },
        style: {
            ...buttonStyle,
            backgroundColor: "#FFFFFF",
        },
        textStyle: {
            ...textStyle,
            color: '#000000'
        },
        imageStyle: {
            ...imageStyle,
        }
    }
]




export default function LoginScreen(props) {
    const [data, setData] = useState({});
    const [loginPhone, setLoginPhone] = useState(false);
    const dispatch = useDispatch();
    useSelector


    const handleChange = (key, text) => {
        setData({
            ...data,
            [key]: text
        })
    }
    const handlerGetFacebook = async (data) => {
        const url = `${config.baseUrl}external/auth/facebook`;
        try {
            let getFacebook = await generic(url, 'POST', data)
            console.log("getFacebook", getFacebook);
        } catch (error) {
            console.log("ERROR DE VISTA", error);
            props.navigation.navigate('Register')
        }
    }
    const handleLoginFacebook = async () => {
        // console.log("entro hasta aqui");
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


    const handleLogin = async () => {
        const url = `${config.baseUrl}oauth/login`;
        try {
            let responseLogin = await generic(url, 'POST', data)
            console.log("RESPUESTA_LOGIN", responseLogin);
            /*dispatch(setToken()) */
            props.navigation.navigate('HomeScreen')
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.container} >
                    <Image
                        style={styles.image}
                        source={require("../../../assets/img/login.png")}
                    />
                    <Text style={styles.text}>SKOLL</Text>
                    <Text style={styles.helpText}>Accede rapidamente a tus compras</Text>
                    <View style={styles.categories}>
                        {
                            [1, 2, 3].map(i =>
                                <LinearGradient
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
                            buttons.map(button =>
                                <TouchableOpacity style={button.style} key={button.title} onPress={() => {

                                }}>
                                    <View style={button.buttonRowStyle}>
                                        <Image
                                            style={button.imageStyle}
                                            source={button.icon}
                                        />
                                        <Text style={button.textStyle}>{button.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <TouchableOpacity
                        style={{ ...buttonStyle, backgroundColor: "#3B5998" }}
                        onPress={() => { handleLoginFacebook() }}
                    >
                        <View style={{ ...buttonRowStyle }}>
                            <Image
                                style={{
                                    ...imageStyle,
                                }}
                                source={facebook}
                            />
                            <Text style={{ ...textStyle, color: '#FFFFFF' }}>Continúa con facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...buttonStyle, backgroundColor: "#EC6222", }}
                        onPress={() => { setLoginPhone(!loginPhone) }}
                    >
                        <View style={{ ...buttonRowStyle }}>
                            <Image
                                style={{
                                    ...imageStyle,
                                }}
                                source={phone}
                            />
                            <Text style={{ ...textStyle, color: '#FFFFFF' }}>Continúa con tu celular</Text>
                        </View>
                    </TouchableOpacity>
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
                            ¿Olvidaste tu contraseña?
                    </Text>
                        <Text style={styles.forgotPasswordLink}>
                            Recuperala aqui !
                    </Text>
                    </View>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Register') }} >
                        <Text style={styles.forgotPasswordLink}>
                            Registrarse
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    label: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: 18
    },
    container: {
        width: ScreenWidth,
        flex: 1,
        backgroundColor: 'rgb(40, 40, 40)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        color: '#fff',
        fontFamily: 'Alegreya-Italic',
        fontSize: 80
    },
    screen: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpText: {
        fontFamily: 'Andada SC',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
        lineHeight: 24,
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
        height: 32,
        width: 32,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16
    },
    forgotPasswordContainer: {
        width: '65%',
        marginVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    forgotPasswordAsk: {
        fontFamily: 'Alike',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#FFFFFF'
    },
    forgotPasswordLink: {
        fontFamily: 'Alike',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#C27406'
    }, btn: {
        backgroundColor: '#E8A537',
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});