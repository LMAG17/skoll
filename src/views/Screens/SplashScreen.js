import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import { getParameters } from '../../controllers/splashScreenController';
import { FontSizeRP, WidthDP } from '../../utils/CalculateSize';

export default function SplashScreen(props) {

    const [progress, setprogress] = useState(0)

    const parameters = useSelector(state => state.parameters);

    const dispatch = useDispatch()

    const { splashScreen, appTheme } = parameters;

    const { setisSetup } = props;

    useEffect(() => {
        getParameters({ dispatch });
        setTimeout(() => {
            if (progress < 100) {
                setprogress(progress + 20);
            }
            else {
                setisSetup(true)
            }
        }, 500);
    }, [progress])

    return (
        <View style={styles.screen}>
            <View style={[styles.container]} >
                <Image
                    style={styles.image}
                    source={require("../../assets/img/Logo.png")} />
                <Text style={styles.text}>{splashScreen.title}</Text>
                <View style={styles.lineStyle} />
                <View style={styles.lineThinStyle} />
                <Text style={styles.textSmall}>{splashScreen.rights}</Text>
                <Progress.Bar progress={progress / 100} width={200} color={appTheme.accent} style={{ marginVertical: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WidthDP(432),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: WidthDP(200),
        height: WidthDP(200),
    },
    text: {
        color: '#fff',
        fontFamily: 'Alegreya-Italic',
        fontSize: FontSizeRP(72)
    },
    screen: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#fff',
        margin: 5,
        width: WidthDP(129)
    },
    lineThinStyle: {
        borderWidth: 0.5,
        borderColor: '#fff',
        width: WidthDP(74)
    },
    textSmall: {
        fontSize: FontSizeRP(5)
    }
});

SplashScreen.propTypes = {
    setisSetup: PropTypes.func.isRequired,
}