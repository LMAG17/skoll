import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import InputCustom from '../../../components/InputCustom'
import { setSessionId } from '../../../middlewares/sessionId/sessionIdMiddleware'
import { register as registerService } from '../../../services/ServiceInteractor'
import { FontSizeRP, HeightDP, WidthDP } from '../../../utils/CalculateSize'

export default function Register(props) {

    const navigation = props.navigation

    const dispatch = useDispatch()

    const { user, parameters } = useSelector(state => state)

    const { register } = parameters

    const [data, setdata] = useState({
        "cellPhonePrefix": "+57",
    })

    const handleChange = (key, value) => {
        setdata({
            ...data,
            [key]: value
        })
    }

    const handleGetPreRegister = async () => {
        try {
            let getRegister = await registerService(data)
            props.navigation.navigate('ValidateOtpEmail')
            dispatch(setSessionId(getRegister.data.sessionId))

        } catch (error) {
        }
    }

    useEffect(() => {
        if (user) {
            setdata({
                ...data,
                firstname: user.firstName,
                lastName: user.lastName,
                email: user.email,
                city: user.city
            })
        }
    }, [user])

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{register.title}</Text>
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
                <Text style={styles.label}>{register.lastNameField}</Text>
                <InputCustom
                    style={styles.input}
                    onChangeText={text =>
                        handleChange('lastName', text)
                    }
                    value={data.lastName} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={styles.label}>{register.phoneField}</Text>
                        <InputCustom
                            style={styles.input}
                            source={require('../../../assets/img/smartphone.png')}
                            onChangeText={text =>
                                handleChange('cellPhone', text)
                            }
                            textContentType="emailAddress"
                        />
                    </View>
                    <View style={{ width: '48%', overflow: 'hidden' }}>
                        <Text style={styles.label}>{register.emailField}</Text>
                        <InputCustom
                            style={styles.input}
                            onChangeText={text =>
                                handleChange('email', text)
                            }
                            textContentType="emailAddress"
                            value={data.email}
                            source={require('../../../assets/img/email.png')}
                            iconStyles={{ height: HeightDP(16), width: WidthDP(20) }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={[styles.label, { marginRight: WidthDP(8) }]}>{register.fromField}</Text>
                    <Image
                        source={require('../../../assets/img/colombia.png')}
                        style={{ height: HeightDP(20), width: WidthDP(20) }}
                    />
                </View>
                <TouchableOpacity style={styles.containerDepartment} onPress={() => navigation.navigate('Departaments')}>
                    <Image
                        style={styles.iconDepartment}
                        source={require('../../../assets/img/point.png')}
                    />
                    <Text
                    >
                        {data.city}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
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
                    <Text style={[styles.label, styles.btnText]}>{register.continueButton}</Text>
                </TouchableOpacity>
            </View>
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
    },
    screen: {
        flex: 1,
        paddingHorizontal: WidthDP(30),
        backgroundColor: '#282828',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    containerDepartment: {
        height: HeightDP(40),
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        overflow: 'hidden',
    },
    iconDepartment: {
        width: WidthDP(15),
        height: HeightDP(20),
        margin: WidthDP(8)
    },
})
