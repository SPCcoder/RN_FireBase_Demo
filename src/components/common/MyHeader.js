// MyHeader.js
import React from 'react';
import {Text, View} from 'react-native';

// Make component
const MyHeader = (props) => {
    const {textStyle, viewStyle} = styles; // deconstructing the styles const
    return (
    <View style = {viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};
const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'grey',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        elevation:2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
//export default MyHeader; // export for use else where
export {MyHeader};