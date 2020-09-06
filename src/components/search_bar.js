import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmitted}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name = "search" size = {30.0} style = {{alignSelf: 'center', marginHorizontal: 15.0,}} />
            <TextInput 
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {term}
            // onChangeText = {(newTerm) => onTermChange(newTerm)}
            onChangeText = {onTermChange}
            style = {styles.inputStyle}
            placeholder = "Search"
            placeholderTextColor = "black"
            // onEndEditing = {() => onTermSubmitted()}
            onEndEditing = {onTermSubmitted}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e8e8e8',
        height: 55.0,
        borderRadius: 10.0,
        marginHorizontal: 20.0,
        flexDirection: 'row',
        padding: 5.0,
        marginTop: 20.0,
        
    }, 
    inputStyle: {
        flex: 1,
        fontSize: 18.0,
    }
});
export default SearchBar;