import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontSizeRP, HeightDP, WidthDP } from '../utils/CalculateSize';

export default function InputCustom(props) {
    const {
        options,
        renderProp,
        source,
        placeholder,
        value,
        onChange,
        onChangeText,
        style,
        textContentType,
        iconStyles,
    } = props;

    const [open, setOpen] = useState(false);

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={() => { setOpen(true) }} style={[styles.touchable]}>
                <Image
                    style={[styles.icon, iconStyles]}
                    source={source}
                />
                <Text
                    style={styles.text}
                >
                    {value}
                </Text>
            </TouchableOpacity>
            {
                open &&
                <ScrollView style={{ width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        {options.map((option, index) => {
                            return (
                                <TouchableOpacity
                                    style={{ backgroundColor: option[renderProp] === value ? "rgba(234, 170, 65, 1)" : "transparent", width: '100%' }}
                                    key={index}
                                    onPress={() => {
                                        setOpen(false);
                                        if (onChange) onChange(option);
                                        if (onChangeText) onChangeText(option[renderProp]);
                                    }}>
                                    <Text style={[styles.option, { color: option[renderProp] === value ? "black" : "white" }]}>{option[renderProp]}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#2D2D2D',
    },
    touchable: {
        height: HeightDP(35),
        width: '100%',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: HeightDP(8),
    },
    icon: {
        width: WidthDP(24),
        height: HeightDP(24),
        margin: WidthDP(4)
    },
    text: {
        fontFamily: 'Alegreya-VariableFont_wght',
        fontSize: FontSizeRP(16),
        marginVertical: HeightDP(8),
    },
    option: {
        fontFamily: 'Alegreya-VariableFont_wght',
        marginHorizontal: WidthDP(20),
        marginVertical: HeightDP(8),
        fontSize: FontSizeRP(16),
    }
})

InputCustom.prototypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    style: PropTypes.object,
    iconStyles: PropTypes.object,
    source: PropTypes.any,
    textContentType: PropTypes.string,
}