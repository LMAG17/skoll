import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Colors from '../../constants/colors';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();
const hasNotch = DeviceInfo.hasNotch();

const LocalParams = [
    {
        "order": 1,
        "show": true,
        "enabled": true,
        "name": "Inicio",
        "route": "Tab1",
        "image": "httpshttps://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
    },
    {
        "order": 2,
        "show": true,
        "enabled": false,
        "name": "Mensajes",
        "route": "Tab2",
        "image": "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
    },
    {
        "order": 3,
        "show": true,
        "enabled": false,
        "name": "Qr",
        "route": "Tab3",
        "image": "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
    },
    {
        "order": 4,
        "show": true,
        "enabled": false,
        "name": "Publicaciones",
        "route": "Tab3",
        "image": "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
    },
    {
        "order": 5,
        "show": true,
        "enabled": false,
        "name": "Perfil",
        "route": "Tab3",
        "image": "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
    }
]


function MainTabs() {

    const navigationParams = LocalParams;

    let tabOpt = null;

    if (Platform.OS === 'ios') {
        tabOpt = ios;
    } else {
        tabOpt = android;
    }


    const Routes = {
        "Tab1": HomeScreen,
        "Tab2": HomeScreen,
        "Tab3": HomeScreen,
        "Tab4": HomeScreen,
        "Tab5": HomeScreen,
        "Tab6": HomeScreen,
        "Tab7": HomeScreen,
    }

    const TabsOptions = navigationParams.slice().sort((a, b) => a.order - b.order)

    function MyTabBar({ navigation }) {
        return (
            <View style={[tabOpt.style, { flexDirection: 'row' }]}>
                {
                    TabsOptions.map(item => <TouchableOpacity
                        activeOpacity={1}
                        underlayColor="transparent"
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                        disabled={!__DEV__ && !item.enabled}
                        onPress={() => navigation.navigate(item.name)}
                        key={item.name}
                    >
                        <View style={styles.tabsContainer}>
                            <View style={styles.svgContainer}>
                                <Image source={{ uri: item.image }} scale={950} />
                            </View>
                            <Text style={styles.bottomNavText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }
            </View>
        );
    }

    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            {TabsOptions.map((item) => <Tab.Screen key={item.name} name={item.name} component={Routes[item.route]} options={{ headerShown: false }} />)}
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabsContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    svgContainer: {
        width: 34,
        height: 34,
        marginLeft: 2
    },
    bottomNavText: {
        color: 'white',
        marginTop: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 12,
        fontSize: 12,
    },
});


const ios = {
    showLabel: false,
    activeTintColor: Colors.black,
    inactiveTintColor: Colors.black,
    style: {
        height: hasNotch ? 114 : 72,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        backgroundColor: Colors.backgroundGrey,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderTopWidth: 0.5,
        shadowColor: Colors.black,
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        borderTopColor: Colors.navigationBarBorder,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: Colors.navigationBarBorder,
    },
};

const android = {
    activeTintColor: "white",
    inactiveTintColor: "white",
    showLabel: false,
    tabBarVisible: false,
    tabStyle: {
        flex: 1,
        alignItems: 'center',
    },
    style: {
        elevation: 23,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#161616',
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        // borderTopWidth: 0.5,
        borderTopColor: '#161616',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#161616',
    },
};

const gone = {
    activeTintColor: Colors.black,
    inactiveTintColor: Colors.black,
    showLabel: false,
    tabBarVisible: false,
    tabStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.backgroundGrey,
    },
    style: {
        height: 0,
        backgroundColor: Colors.backgroundGrey,
    },
};


export default MainTabs;
