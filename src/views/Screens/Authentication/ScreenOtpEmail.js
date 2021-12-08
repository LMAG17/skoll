import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import InputCustom from '../../../components/InputCustom';
import { generateOtp, validateOtp as validateOtpService } from '../../../services/ServiceInteractor';
import { WidthDP } from '../../../utils/CalculateSize';

const ScreenOtpEmail = (props) => {

    const [data, setData] = useState({});

    const dispatch = useDispatch();
    
    const sessionId = useSelector(state => state.sessionId);

    const handleGenerateOtp = async () => {
        console.log("FUncion de la vista", sessionId);
        try {
            let responseGenerateOtp = await generateOtp({ transaction: "GENERATE_OTP_REGISTRY", sessionId });
            console.log("RESPUESTA_Otp", responseGenerateOtp);
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }

    const handleValidateOtp = async () => {
        try {
            let responseValidateOtp = await validateOtpService({ transaction: "VALIDATE_OTP_REGISTRY", sessionId, otp: data.otp })
            console.log("RESPUESTA_ValidateOtp", responseValidateOtp);
            props.navigation.navigate('FormRegister')
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }

    const handleChange = (key, value) => {
        setData({
            [key]: value,
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleStyle}>Hemos dectectado un{"\n"}nuevo cliente.</Text>
            </View>
            <View style={{ padding: 20 }} >
                <View>
                    <Text style={styles.titleStyle}>Ingresa el código que hemos enviado a tu correo electrónico: </Text>
                </View>
                <View style={{ ...styles.input, alignSelf: 'stretch', marginTop: 40 }}>
                    <InputCustom onChangeText={text => handleChange('otp', text)} />
                </View>
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={() => handleValidateOtp()}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => handleGenerateOtp()}>
                <Text>Generar otp</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: WidthDP(30)
    },
    containerTitle: {
        alignItems: 'flex-start',
        width: '100%',
    },
    titleStyle: {
        textAlign: 'left',
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
