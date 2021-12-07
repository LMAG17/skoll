import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import InputSelectCustom from '../../components/InputSelectCustom';
import { finishRegistration } from '../../services/ServiceInteractor';
import InputCustom from '../../components/InputCustom';
import { FontSizeRP, HeightDP, WidthDP } from '../../utils/CalculateSize';

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
        try {
            let responseRegister = await finishRegistration(data)
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
                <Text style={styles.titleStyle}>Permitenos conocerte{"\n"}mejor</Text>
            </View>
            <View style={styles.form} >
                <Text style={styles.label}>Edad</Text>
                <InputCustom
                    style={styles.input}
                    onChangeText={text => handleChange('age', text)}
                />
                <InputSelectCustom
                    genders={genders}
                    selectOptionType={gender}
                    setSelectOptionType={setgender}
                    placeholder="Genero"
                />
                <InputSelectCustom
                    genders={genders}
                    selectOptionType={selectOptionType}
                    setSelectOptionType={setSelectOptionType}
                    placeholder="Me interesa:"
                />
                <Text style={styles.label}>Contraseña</Text>
                <InputCustom
                    style={styles.input}
                    onChangeText={text => handleChange('password', text)}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={() => handleRegisterService()}>
                    <Text style={styles.label}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
    },
    screen: {
        flex: 1,
        paddingHorizontal: WidthDP(30),
        backgroundColor: '#282828',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    }
})

export default FormRegister;
