import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { login } from '../../../services/ServiceInteractor';

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
    },
    {
        title: "Continúa con facebook",
        icon: facebook,
        buttonRowStyle: {
            ...buttonRowStyle
        },
        style: {
            ...buttonStyle,
            backgroundColor: "#3B5998",
        },
        textStyle: {
            ...textStyle,
            color: '#FFFFFF'
        },
        imageStyle: {
            ...imageStyle,
        }
    },
    {
        title: "Continúa con tu celular",
        icon: phone,
        buttonRowStyle: {
            ...buttonRowStyle
        },
        style: {
            ...buttonStyle,
            backgroundColor: "#EC6222",
        },
        textStyle: {
            ...textStyle,
            color: '#FFFFFF'
        },
        imageStyle: {
            ...imageStyle,
        }
    },
]

export default function LoginScreen() {
    const dispatch = useDispatch();


    const handleChange = (key, text) => {
        setData({
            ...data,
            [key]: text
        })
    }

    const handleLogin = async () => {
        login()
    }

    return (
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
                                dispatch(setConsumeService(
                                    {
                                        url: 'http://54.241.45.111:8090/user/register',
                                        method: 'POST',
                                        body: {
                                            "firstname": "juam",
                                            "lastName": "alvare",
                                            "email": "juam.valim@gmail.com",
                                            "cellPhone": "3000000000",
                                            "city": "Villavicencio"
                                        },
                                    }
                                ))
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
                    <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordAsk}>
                    ¿Olvidaste tu contraseña?
                </Text>
                <Text style={styles.forgotPasswordLink}>
                    Recuperala aqui !
                </Text>
            </View>
        </View>
            </View >
        </View >
    )
}
const styles = StyleSheet.create({
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
    }
});