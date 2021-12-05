import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { generateOtp, validateOtp as validateOtpService } from '../../../services/ServiceInteractor';

const ScreenOtpEmail = (props) => {
    const [data, setData] = useState({});
    const [token, setToken] = useState({});
    const dispatch = useDispatch();
    const serviceResponse = useSelector(state => state.serviceResponse);
    const serviceOtp = useSelector(state => state.serviceOtp);
    const validateOtp = useSelector(state => state.validateOtp);
    const sessionId = useSelector(state => state.sessionId);


    const handleGenerateOtp = async () => {
        console.log("FUncion de la vista", sessionId);
        const body = { "sessionId": sessionId }
        try {
            let responseGenerateOtp = await generateOtp("GENERATE_OTP_REGISTRY", body);
            console.log("RESPUESTA_Otp", responseGenerateOtp);
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }
    const handleValidateOtp = async () => {
        try {
            let responseValidateOtp = await validateOtpService("VALIDATE_OTP_REGISTRY", data)
            console.log("RESPUESTA_ValidateOtp", responseValidateOtp);
            props.navigation.navigate('FormRegister')
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }
    const handleChange = (key, value) => {
        setData({
            [key]: value,
            sessionId
        })

    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleStyle}>Hemos dectectado un{"\n"}nuevo cliente.</Text>
            </View>
            <TouchableOpacity onPress={() => handleGenerateOtp()}>
                <Text>Generar otp</Text>
            </TouchableOpacity>
            <View style={{ padding: 20 }} >
                <View>
                    <Text style={styles.titleStyle}>Ingresa el código que hemos enviado a tu correo electrónico: </Text>
                </View>
                <View style={{ ...styles.input, alignSelf: 'stretch', marginTop: 40 }}>
                    <TextInput onChangeText={text => handleChange('otp', text)} />
                </View>
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={() => handleValidateOtp()}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'space-around'
    }, containerTitle: {
        alignItems: 'flex-start',
        width: '80%'
    }, titleStyle: {
        color: "#FFFFFF",
        fontFamily: 'Average-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 29,
    },
    input: {
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 10
    }, text: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: 18
    },
    btn: {
        backgroundColor: '#E8A537',
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default ScreenOtpEmail;
