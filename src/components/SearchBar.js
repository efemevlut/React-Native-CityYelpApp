import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}
            />
        </View>
    )
}

export {SearchBar};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#535c68",
        margin: 5,
        padding: 2,
        borderRadius: 5,
        color: "white"
    },
    input: {
        color: "white"
    }
})