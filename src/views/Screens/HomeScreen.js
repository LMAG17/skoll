import React from 'react'
import {

    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native'
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    const promos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20]
    return (
        <ScrollView style={{ backgroundColor: '#161616', flex: 1 }}>
            <View style={styles.loginContainer}>
                <View style={styles.icon} />
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}} >
                <Text style={styles.loginText}>Iniciar Sesion</Text>
                </TouchableOpacity>
                <View style={styles.icon} />
                <View style={styles.icon} />
                <View style={styles.icon} />
            </View>
            <View style={styles.searchInput}>
                <TextInput placeholder="¿Que quieres hoy?" placeholderTextColor="#ffffff" />
                <View style={styles.icon} />
            </View>
            <View style={styles.categories}>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <View style={styles.megaIcon} />
                    <Text style={{ fontSize: 12, color: "white" }}>Restaurantes</Text>
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: '10%' }}>
                {promos.map(promo => {
                    return (
                        <View style={{ marginHorizontal: 24 }} >
                            <TouchableHighlight onPress={() => { }}>
                                <View style={{ width: 230, height: 80, backgroundColor: '#E9A83C', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ color: 'white' }}>Promocion #{promo}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>);
                })}
            </ScrollView>
            <View>
                <View style={{ height: 1, backgroundColor: '#3E3B3B' }} />
                <Text horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: '5%', color: '#A5A5A5', marginHorizontal: '5%', fontFamily: 'BarlowCondensed' }}>Eventos</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {promos.map(promo => {
                        return (
                            <View style={{ marginHorizontal: 24 }} >
                                <TouchableHighlight onPress={() => { }}>
                                    <View style={{ width: 130, height: 130, backgroundColor: '#E9A83C', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                        <Text style={{ color: 'white' }}>Evento #{promo}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>);
                    })}
                </ScrollView>
            </View>
        </ScrollView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        height: 80,
        marginHorizontal: '10%',
        marginVertical: '10%',
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#2D2D2D',
        color: 'white',
        shadowColor: "rgba(235, 124, 4, 0.5)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderWidth: 1,
        borderColor: "rgba(235, 124, 4, 0.5)",
    },
    loginText: {
        color: 'white',
        fontFamily: 'BarlowCondensed',
    },
    icon: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 100,
    },
    searchInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: "10%",
        width: '80%',
        backgroundColor: '#2D2D2D',
        borderRadius: 16,
        paddingHorizontal: 32,
    },
    megaIcon: {
        height: 60,
        width: 60,
        backgroundColor: '#E9A83C',
        borderRadius: 100,
        margin: 4
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginVertical: '10%',
        marginHorizontal: '10%'
    },
    promos: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        marginVertical: '10%',
        marginHorizontal: '10%',
        backgroundColor: 'white',
    },
    promo: {
        height: 80,
        width: '80%',
        borderRadius: 5,
        backgroundColor: "rgba(235, 124, 4, 0.5)",
    }
})
