import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { config } from '../../../constants/config'
import { setSessionId } from '../../../middlewares/sessionId/sessionIdMiddleware'
import { generic } from '../../../utils/Services'

export default function Register(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    const [data, setdata] = useState({})
    console.log("USUARIO",user);
    const handleChange = (key, value) => {
        setdata({
            ...data,
            "cellPhonePrefix": "+57",
            [key]: value
        })
        console.log("data", data);
    }
    const handleGetPreRegister = async () => {
        const url = `${config.baseUrl}${config.apiUser}register`;
        try {
            let getRegister = await generic(url, 'POST', data)
            console.log("getRegister", getRegister);
            props.navigation.navigate('ValidateOtpEmail')
            dispatch(setSessionId(getRegister.data.sessionId))

        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }

    return (
        <View style={styles.screen}>

            <View>
                <Text style={styles.titleStyle}>{"Confirma tus datos \nantes de continuar"}</Text>
            </View>
            <View style={{ width: '80%' }}>
                <Text>Nombres</Text>
                <View style={{ ...styles.input, flexDirection: 'row', alignItems: 'center' }}>

                    <TextInput onChangeText={text => handleChange('firstname', text)} textContentType="emailAddress" value={user.firstName} />
                </View>
                <Text>Apellidos</Text>
                <View style={{ ...styles.input, flexDirection: 'row', alignItems: 'center' }}>

                    <TextInput onChangeText={text => handleChange('lastName', text)} textContentType="emailAddress" value={user.lastName} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ width: '48%' }}>
                        <Text style={styles.text}>Telefono</Text>
                        <View style={{ ...styles.input, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/img/smartphone.png')} />
                            <TextInput onChangeText={text => handleChange('cellPhone', text)} textContentType="emailAddress" />
                        </View>
                    </View>
                    <View style={{ width: '48%' }}>
                        <Text style={styles.text}>Correo</Text>
                        <View style={{ ...styles.input, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/img/email.png')} />
                            <TextInput onChangeText={text => handleChange('email', text)} textContentType="emailAddress" value={user.email} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '80%' }}>
                    <Text style={styles.text}>Estas en:</Text>
                    <Image source={require('../../../assets/img/colombia.png')} />
                </View>
                <View style={{ ...styles.input, flexDirection: 'row', alignItems: 'center', width: '80%' }}>
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
        borderRadius: 10,
        marginVertical: 8
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
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

    },
    screen: {
        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
