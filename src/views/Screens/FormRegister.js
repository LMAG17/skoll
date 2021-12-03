import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import InputSelectCustom from '../../components/InputSelectCustom';
import { config } from '../../constants/config';
import { generic } from '../../utils/Services';
import {setToken} from '../../middlewares/token'

const FormRegister = (props) => {
    const genders = [
        { "name": "Hombre" },
        { "name": "Mujer" }
    ]
    const [gender, setgender] = useState("");
    const [selectOptionType, setSelectOptionType] = useState("");
    const [data, setData] = useState({});
    const [token, setToken] = useState("");
    const dispatch = useDispatch();
    const sessionId = useSelector(state => state.sessionId);



    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value,
            "gender": gender,
            "interestGender": selectOptionType,
            sessionId
        })

    }
    const handleRegisterService = async () => {
        const url = `${config.baseUrl}${config.apiUser}register/confirmation`;
        try {
            let responseRegister = await generic(url, 'POST', data)
            console.log("RESPUESTA_Register", responseRegister);
            dispatch(setToken(responseRegister.data.token))
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
        console.log(data);

    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleStyle}>Permitenos conocerte{"\n"} mejor</Text>
            </View>
            <View style={{ padding: 20, width: '97%' }} >
                <Text style={styles.text}>Edad</Text>
                <TextInput style={styles.input} onChangeText={text => handleChange('age', text)} />
                <InputSelectCustom genders={genders} selectOptionType={gender} setSelectOptionType={setgender} placeholder="Genero" />
                <InputSelectCustom genders={genders} selectOptionType={selectOptionType} setSelectOptionType={setSelectOptionType} placeholder="Me interesa:" />
                <Text style={styles.text}>Contraseña</Text>
                <TextInput style={styles.input} onChangeText={text => handleChange('password', text)} secureTextEntry={true} />
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={() => handleRegisterService()}>
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
        backgroundColor: "#2D2D2D",
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

export default FormRegister;
