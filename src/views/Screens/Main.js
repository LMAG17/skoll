import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { onFacebookButtonPress } from '../../firebase/auth';
import { facebookLogin } from '../../services/ServiceInteractor';



const Main = () => {
    const [displayName, setDisplayName] = useState()

    const handlerGetFacebook = async (data) => {
        try {
            let getFacebook = await facebookLogin(data)
            console.log("getFacebook", getFacebook);
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }
    const handleValidateOtp = async () => {
        // console.log("entro hasta aqui");
        onFacebookButtonPress().then((res) => {
            handlerGetFacebook({
                tokenFacebook: res.data.accessToken,
                expiredToken: res.data.expirationTime,
                uuid: res.sign.user.uid
            })
        })

    }
    return (
        <View>
            <Text>Consumo de servicios</Text>
            <Button
                title="Facebook Sign-In"
                onPress={() => handleValidateOtp()}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Main;
