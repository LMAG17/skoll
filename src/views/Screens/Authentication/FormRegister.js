import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import InputCustom from '../../../components/InputCustom'
import InputSelectCustom from '../../../components/InputSelectCustom'
import { finishRegistration } from '../../../services/ServiceInteractor'
import { FontSizeRP, HeightDP, WidthDP } from '../../../utils/CalculateSize'

export default function Register() {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const { parameters, sessionId } = useSelector(state => state)

    const { register, appTheme } = parameters

    const [data, setdata] = useState({})

    const genders = [
        { "name": "Hombre" },
        { "name": "Mujer" }
    ]

    const handleRegisterService = async () => {
        try {
            let responseRegister = await finishRegistration(data)
            dispatch(setToken(responseRegister.data.token))
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }

    const handleChange = (key, value) => {
        setdata({
            ...data,
            [key]: value
        })
    }


    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Permitenos conocerte mejor</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>{register.firstNameField}</Text>
                <InputCustom
                    style={styles.input}
                    onChangeText={text =>
                        handleChange('firstname', text)
                    }
                    value={data.firstname}
                />
                <Text style={styles.label}>Genero</Text>
                <InputSelectCustom
                    source={require('../../../assets/img/point.png')}
                    iconStyles={{ height: HeightDP(16), width: WidthDP(14) }}
                    options={genders}
                    renderProp="name"
                    style={styles.input}
                    onChangeText={text =>
                        handleChange('gender', text)
                    }
                    value={data.gender}
                />
                <Text style={styles.label}>Me interesa</Text>
                <InputSelectCustom
                    source={require('../../../assets/img/point.png')}
                    iconStyles={{ height: HeightDP(16), width: WidthDP(14) }}
                    options={genders}
                    renderProp="name"
                    style={styles.input}
                    onChangeText={text =>
                        handleChange('interestGender', text)
                    }
                    value={data.interestGender}
                />
                <Text style={styles.label}>Contraseña</Text>
                <InputCustom
                    textContentType="password"
                    style={styles.input}

                    onChangeText={text =>
                        handleChange('password', text)
                    }
                    value={data.password} />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Terms')
                }}
                style={styles.termsContainer}>
                <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#EAAA41', marginHorizontal: 16 }} />
                <Text style={[styles.label, styles.termsText]}>
                    Aceptar
                    <Text style={[styles.label, styles.termsLink]}>
                        {" terminos y condiciones"}
                    </Text>
                </Text>
            </TouchableOpacity>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    handleRegisterService()
                }}>
                    <Text style={[styles.label, styles.btnText]}>{register.continueButton}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                }}
                style={{ width: WidthDP(432 - 60), alignItems: 'center', justifyContent: 'center', }}>
                <Text style={styles.loginText}>¿Ya tienes una cuenta?
                    <Text style={styles.loginLink}>
                        {" Iniciar sesión"}
                    </Text>
                </Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#E8A537',
        width: WidthDP(250),
        height: HeightDP(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btnText: {
        fontSize: FontSizeRP(20),
    },
    form: {
        width: '100%',
    },
    label: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: FontSizeRP(16),
        fontWeight: '400',
        lineHeight: 22,
        marginVertical: HeightDP(4),
    },
    input: {
        marginVertical: HeightDP(4)
    },
    titleContainer: {
        width: '100%',
        alignItems: 'flex-start',
    },
    titleStyle: {
        color: "#FFFFFF",
        fontFamily: 'Average-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontWeight: '400',
        fontSize: FontSizeRP(24),
        lineHeight: 29,
        width: '80%',
    },
    screen: {
        flex: 1,
        paddingHorizontal: WidthDP(30),
        backgroundColor: '#282828',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    termsContainer: {
        width: '100%',
        marginVertical: HeightDP(4),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    termsText: {
        textDecorationLine: 'underline',
        fontSize: FontSizeRP(20),
    },
    termsLink: {
        color: '#EAAA41',
        fontSize: FontSizeRP(20),
    },
    loginText: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: FontSizeRP(10),
        textAlign: 'center',
    },
    loginLink: {
        color: '#EAAA41',
    }
})
