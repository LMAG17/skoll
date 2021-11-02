import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Register() {
    return (
        <View style={styles.screen}>
            <View style={styles.container} >
                <View>
                    <Text style={styles.titleStyle}>{"Confirma tus datos \nantes de continuar"}</Text>
                </View>
                <View>
                    <Text>Nombres</Text>
                    <TextInput />
                    <Text>Apellidos</Text>
                    <TextInput />
                    <View style={styles.contactForm}>
                        <View>
                            <Text>Telefono</Text>
                            <TextInput />
                        </View>
                        <View>
                            <Text>Correo</Text>
                            <TextInput />
                        </View>
                    </View>
                    <Text>Apellidos</Text>
                    <TextInput />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'rgb(40, 40, 40)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titleStyle: {

        fontFamily: 'Average',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 29,
    },
    contactForm: {
        backgroundColor: 'red',
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
