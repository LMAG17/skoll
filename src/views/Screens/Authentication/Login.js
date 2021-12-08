import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import InputCustom from '../../../components/InputCustom';
import { handleLoginFacebook, handleGetData } from '../../../controllers/BaseController';
import { setToken } from '../../../middlewares/token/tokenMiddleware';
import { setUser } from '../../../middlewares/user/userMiddleware';
import { getUserData, login as loginService } from '../../../services/ServiceInteractor';
import { FontSizeRP, HeightDP, WidthDP } from '../../../utils/CalculateSize';

export default function LoginScreen(props) {

    const [loginPhone, setLoginPhone] = useState(false);

    const [data, setData] = useState({});

    const { parameters, user } = useSelector(state => state)

    const dispatch = useDispatch();

    const navigation = props.navigation;

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

    const handleLoginType = (action) => {
        switch (action.type) {
            case 'login':
                if (action.payload == "facebook") {
                    handleLoginFacebook({ dispatch, navigation })
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
        try {
            loginService(data).then(res => {
                handleGetData(res)
            }).catch(err => {
                handleGetData(err)
            })
        } catch (error) {
            console.log("login error", error)
        }
    }

    return (
        <View
            style={[styles.screen, { backgroundColor: appTheme.background }]}
        >

            <Image
                style={styles.image}
                source={require("../../../assets/img/login.png")}
            />

            <Text style={styles.text}>
                {login.title}
            </Text>

            <Text style={styles.helpText}>
                {login.subtitle}
            </Text>

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

            {
                loginPhone ?
                    <View style={{
                        borderRadius: 20,
                        marginVertical: HeightDP(10),
                        paddingVertical: HeightDP(10),
                        paddingHorizontal: WidthDP(40),
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => setLoginPhone(false)}>
                            <Text >
                                {"<- Atras"}
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ ...styles.label, }}>Telefono</Text>
                        <InputCustom
                            source={require('../../../assets/img/smartphone.png')}
                            onChangeText={text => handleChange('username', text)}
                            textContentType={'telephoneNumber'}
                        />
                        <Text style={styles.label}>Contraseña</Text>
                        <InputCustom
                            onChangeText={text => handleChange('password', text)}
                            textContentType={"password"}
                        />
                        <View style={{ marginTop: 50, width: WidthDP(432 - 50), alignItems: 'center' }}>
                            <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
                                <Text style={styles.label}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
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
            }
            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordAsk}>
                    {login.forgotPasswordAsk}
                </Text>
                <Text style={styles.forgotPasswordLink}>
                    {login.forgotPasswordLink}
                </Text>
            </View>
            <TouchableOpacity onPress={() => {
                dispatch(setUser({}));
                props.navigation.navigate('Register')
            }} >
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
        marginVertical: HeightDP(8),
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