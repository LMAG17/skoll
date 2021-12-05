import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
export default function SplashScreen(props) {
    const { setisSetup } = props;
    console.log("props", props);
    const [progress, setprogress] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (progress < 100) {
                setprogress(progress + 20);
                // addprogress()

            }
            else {
                setisSetup(true)
                console.log("nlfwknlfwklwenfk");
                
            }
        }, 500);
    }, [progress])

    return (
        <View style={styles.screen}>
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={require("../../assets/img/Logo.png")} />
                <Text style={styles.text}>SKOLL</Text>
                <View style={styles.lineStyle} />
                <Text style={styles.textSmall}>Derechos reservados @Skoll</Text>
                <Progress.Bar progress={progress / 100} width={200} color="rgba(234, 170, 65, 1)" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: ScreenWidth,
        flex: 1,
        backgroundColor: 'rgb(40, 40, 40)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        color: '#fff',
        fontFamily: 'Alegreya-Italic',
        fontSize: 80
    },
    screen: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#fff',
        margin: 10,
        width: 120
    },
    textSmall: {
        fontSize: 2
    }
});