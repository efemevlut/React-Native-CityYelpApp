import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CityItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Text style={styles.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {CityItem};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 5,
        backgroundColor: "#95afc0",
        borderRadius: 8,
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "400",
        color: "white",
    }

})