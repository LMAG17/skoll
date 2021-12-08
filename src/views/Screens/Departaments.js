import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import InputSelectCustom from '../../components/InputSelectCustom'
import { getDepartments } from '../../controllers/BaseController'
import { setUser } from '../../middlewares/user/userMiddleware'
import { FontSizeRP, HeightDP, WidthDP } from '../../utils/CalculateSize'

export default function Departaments() {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const { parameters, user } = useSelector(state => state)

    const { register } = parameters

    const [data, setdata] = useState({
        department: {
            name: '',
        }
    })

    const [departments, setDepartments] = useState([])

    const handleChange = (key, value) => {
        setdata({
            ...data,
            [key]: value
        })
    }

    const handleSelectDepartment = () => {
        dispatch(setUser({ ...user, city: data.city || data.department.name }))
        navigation.goBack()
    }

    const getDepartmentsData = async () => {
        setDepartments(await getDepartments())
    }

    useEffect(() => {
        getDepartmentsData()
    }, [])

    console.log("departments", departments);

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Ingresa el departamento y ciudad donde te encuentras.</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Departamento</Text>
                <InputSelectCustom
                    source={require('../../assets/img/point.png')}
                    iconStyles={{ height: HeightDP(16), width: WidthDP(14) }}
                    options={departments}
                    renderProp="name"
                    style={styles.input}
                    onChange={option => handleChange('department', option)}
                    value={data.department.name}
                />
                {(data.department.cities && data.department.cities.length > 0) &&
                    <View>
                        <Text style={styles.label}>Municipio o ciudad</Text>
                        <InputSelectCustom
                            source={require('../../assets/img/point.png')}
                            iconStyles={{ height: HeightDP(16), width: WidthDP(14) }}
                            options={data.department.cities.map(city => ({ name: city }))}
                            renderProp="name"
                            style={styles.input}
                            onChangeText={text =>
                                handleChange('city', text)
                            }
                            value={data.city}
                        />
                    </View>
                }
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    handleSelectDepartment()
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
