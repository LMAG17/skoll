import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { HeightDP, WidthDP } from '../utils/CalculateSize';

export default function InputCustom(props) {
    const {
        source,
        placeholder,
        value,
        onChangeText,
        style,
        textContentType,
        iconStyles,
    } = props;
    return (
        <View style={[styles.container, style]}>
            <Image
                style={[styles.icon, iconStyles]}
                source={source}
            />
            <TextInput
                style={{ height: '100%', width: '100%' }}
                textContentType={textContentType}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        overflow: 'hidden',
    },
    icon: {
        width: WidthDP(24),
        height: HeightDP(24),
        margin: WidthDP(4)
    },
})

InputCustom.prototypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    style: PropTypes.object,
    iconStyles: PropTypes.object,
    source: PropTypes.any,
    textContentType: PropTypes.string,
}