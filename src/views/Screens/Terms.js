import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontSizeRP, HeightDP, WidthDP } from '../../utils/CalculateSize'

export default function Terms() {
    
    const terms = [
        {
            text: "Tratamiento de datos",
            url: "",
        },
        {
            text: "Tratamiento de datos",
            url: "",
        },
        {
            text: "Tratamiento de datos",
            url: "",
        },
        {
            text: "Tratamiento de datos",
            url: "",
        },
    ]

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>
                    {"Terminos y \ncondiciones"}</Text>
            </View>
            <View style={styles.form}>
                {
                    terms.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    navigation.navigate('Terms')
                                }}
                                style={styles.termsContainer}>
                                <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#EAAA41', marginHorizontal: 16 }} />
                                <Text style={[styles.label, styles.termsText]}>
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => {

                }}>
                    <Text style={[styles.label, styles.btnText]}>Aceptar Terminos</Text>
                </TouchableOpacity>
            </View>
        </View>
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
})
