import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function Testscreen() {
    const [testText, setTestText] = useState("")
    useEffect(() => {
        setTestText("Valor desde el useEffect")
    }, [])
    return (
        <View>
            <TextInput
                onChangeText={(text) => setTestText(text)}
                value={testText}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
