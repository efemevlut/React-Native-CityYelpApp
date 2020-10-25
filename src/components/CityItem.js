import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CityItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {CityItem};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 5,
        backgroundColor: "#9575cd",
        borderRadius: 8,
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "400"
    }

})