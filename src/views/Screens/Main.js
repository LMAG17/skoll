import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { config } from '../../constants/config';
import { onFacebookButtonPress } from '../../firebase/auth';
import { generic } from '../../utils/Services';



const Main = () => {
    const [displayName, setDisplayName] = useState()

    const handlerGetFacebook = async (data) => {
        const url = `${config.baseUrl}external/auth/facebook`;
        try {
            let getFacebook = await generic(url, 'POST', data)
            console.log("getFacebook", getFacebook);
        } catch (error) {
            console.log("ERROR DE VISTA", error);
        }
    }
    const handleValidateOtp = async () => {
        // console.log("entro hasta aqui");
        onFacebookButtonPress().then((res) => {
            handlerGetFacebook({
                tokenFacebook:res.data.accessToken,
                expiredToken:res.data.expirationTime,
                uuid:res.sign.user.uid
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
