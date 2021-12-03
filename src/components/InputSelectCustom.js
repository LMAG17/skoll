import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Modal, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';



export default function InputSelectCustom(props) {
    const { genders, selectOptionType, setSelectOptionType, placeholder } = props;
    const [toggle, setToggle] = useState(false);

    const handleOpenModal = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => handleOpenModal()}>
                <View style={styles.Input}>
                    <Image source={require('../assets/img/point.png')} />
                    <View style={{flex:0.2}}></View>
                    <Text style={{...styles.text,flex:1}}>
                        { selectOptionType != undefined ? selectOptionType : placeholder }
                    </Text>
                </View>
            </TouchableOpacity>

            <Modal
            
                animationType="slide"
                onDismiss={() => console.log('close')}
                onShow={() => console.log('show')}
                transparent
                visible={toggle}
            >
                <TouchableOpacity  style={styles.ModalBg} onPress={()=>{setToggle(!toggle)}}>                    
                    <View style={styles.ModalAlert}>
                        <ScrollView>
                            <View style={{justifyContent: 'center', flex: 1}}>
                                {genders.map((gender) => {
                                    return (
                                        <TouchableOpacity key={gender.name} onPress={() => {
                                            setSelectOptionType(gender.name);
                                            setToggle(!toggle);
                                        }}>
                                            <Text key={gender.name} style={{...styles.text,marginVertical:10,textAlign:'center'}} >{gender.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: "#FFFFFF",
        fontFamily: 'Average-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 21,
        lineHeight: 29,
    },
    ModalAlert: {
        backgroundColor: colors.white,
        paddingTop: 14,
        borderRadius: 10,   
        width:"80%",
        alignSelf:'center'     
    },
    ModalBg: {
        flex: 1,
        backgroundColor: 'rgba(1,1,1,0.5)',
        justifyContent:'center',
    },
    Input: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: Platform.OS == 'ios' ? 40 : 40,
        width: '100%',
        borderRadius: 10,
        backgroundColor: "#2D2D2D",
        marginTop:20,
        
    },
    Fonts: {
       padding:4,
        alignSelf:'center',
        marginBottom: 8,
        color:"#98989D"
    },
    
    iconStyle: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 30
    },
    image:{
        height:30,
        width:30
    }
});

InputSelectCustom.propTypes = {
    genders: PropTypes.array.isRequired, 
    selectOptionType: PropTypes.string.isRequired, 
    setSelectOptionType: PropTypes.func.isRequired, 
    placeholder: PropTypes.string
}