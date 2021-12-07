import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { departaments } from '../../services/ServiceInteractor';
import { FontSizeRP, HeightDP, WidthDP } from '../../utils/CalculateSize';
import { setCity } from '../../middlewares/city/cityMiddleware'

const Departaments = (props) => {
    const [getDepartament, setGetDepartament] = useState({});
    const [selectionDepart, setSelectionDepart] = useState([]);
    const [list, setList] = useState(false);
    const [listCities, setListCities] = useState(false);
    const dispatch = useDispatch()

    const handleDepartaments = async () => {
        setList(true)
        let getDepartament = await departaments()
        setGetDepartament(getDepartament.data.colombia)


    }
    const handleCity = () => {
        setListCities(true)
        console.log(selectionDepart);
    }

    return (
        <View style={styles.container}>
                <Text style={styles.titleStyle}>Ingresa el departamento y ciudad donde te encuentras.</Text>

                <View style={{ width: '100%' }}>
                    <TouchableOpacity onPress={handleDepartaments}>
                        <Text style={styles.label}>Departamento</Text>
                        <View style={styles.lineStyle}></View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity onPress={handleCity}>
                        <Text style={styles.label}>Municipio o ciudad</Text>
                        <View style={styles.lineStyle}></View>
                    </TouchableOpacity>
                </View>
                { <View style={{...styles.container,flex:0.1}}>
                    {list ?
                        Object.keys(getDepartament).map((key) => {
                            console.log(key, getDepartament[key]);
                            return (
                                <ScrollView>
                                    <TouchableOpacity onPress={() => {
                                        setList(true)
                                        setSelectionDepart(getDepartament[key])
                                    }}>
                                        <Text>{key}</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        })
                        : null
                    }
                    {
                        listCities ? selectionDepart.map((city) => {
                            console.log(city);
                            return (
                                <ScrollView>
                                    <TouchableOpacity onPress={() => {
                                        dispatch(setCity(city))
                                        props.navigation.navigate('Register')

                                    }}>
                                        <Text style={styles.label}>{city}</Text>
                                        <View style={styles.lineStyle}></View>
                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        }) : null
                    }
                </View> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: WidthDP(30),

    },
    titleStyle: {
        color: "#FFFFFF",
        fontFamily: 'Average-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontWeight: '400',
        fontSize: FontSizeRP(24),
        lineHeight: 29,
    }, label: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: FontSizeRP(16),
        fontWeight: '400',
        lineHeight: 22,
        marginVertical: HeightDP(2),
    }, lineStyle: {
        borderWidth: 3,
        borderColor: '#FFFFFF',
        width: '100%'

    }
})

export default Departaments;
