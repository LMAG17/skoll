import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../../constants/config';
import { setSessionId } from '../../../middlewares/sessionId/sessionIdMiddleware';
import { generic } from '../../../utils/Services';



export default function Register(props) {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const sessionId = useSelector(state => state.sessionId);

    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value,
            
            "cellPhonePrefix": "+57"
        })

    }
    const handleGetPreRegister = async () => {
        console.log("serviceResponse", sessionId);
        const url = `${config.baseUrl}${config.apiUser}register`;
        try {
            let responsePreRegister = await generic(url, 'POST', data)
            console.log("RESPUESTA_REGISTRO", responsePreRegister);
            console.log(responsePreRegister.data.sessionId);
            dispatch(setSessionId(responsePreRegister.data.sessionId))
            props.navigation.navigate('ValidateOtpEmail')
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.containerTitle}>
                <Text style={styles.titleStyle}>{"Confirma tus datos \nantes de continuar"}</Text>
            </View>
            <View style={styles.form}>

                <Text style={styles.text}>Nombres</Text>
                <TextInput style={styles.input} onChangeText={text => handleChange('firstname', text)} />

                <Text style={styles.text}>Apellidos</Text>
                <TextInput style={styles.input} onChangeText={text => handleChange('lastName', text)} />

                <View style={styles.contactForm}>
                    <View>
                        <Text style={styles.text}>Telefono</Text>
                        <View style={{ ...styles.input, width: 145, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/img/smartphone.png')} />
                            <TextInput onChangeText={text => handleChange('cellPhone', text)} textContentType={'telephoneNumber'} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Correo</Text>
                        <View style={{ ...styles.input, width: 145, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/img/email.png')} />
                            <TextInput onChangeText={text => handleChange('email', text)} textContentType="emailAddress" />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Estas en:</Text>
                    <Image source={require('../../../assets/img/colombia.png')} />
                </View>
                <View style={{ ...styles.input, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../assets/img/point.png')} />
                    <TextInput onChangeText={text => handleChange('city', text)} />
                </View>

            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    handleGetPreRegister()
                    /* console.log(data)
                    dispatch(setConsumeService({
                        url: 'http://54.241.45.111:8090/user/register',
                        method: 'POST',
                        body: data
                    }))
                    props.navigation.navigate('ValidateOtpEmail') */

                }}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
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
    },
    form: {
        width: '80%',
        flex: 0.5,
        justifyContent: 'space-between'
    },
    containerTitle: {
        alignItems: 'flex-start',
        width: '80%'
    },
    input: {
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleStyle: {
        color: "#FFFFFF",
        fontFamily: 'Average-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 29,
    },
    contactForm: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
})
