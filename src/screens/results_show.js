import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';


const ResultsShow = ({navigation}) => {
    
    const[result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);                        
    };
    useEffect(() => {
        getResult(id);
    }, []); 
    
    if(!result) {
        return null;
    }

    return (
        <View>
            <Text>{result['name']} </Text>
            <FlatList 
                data = {result['photos']}
                keyExtractor = {(photo) => photo}
                renderItem = {({item}) => {
                    return <Image style = {styles.image}source = {{uri: item}} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 150.0,
        width: 250.0,
        marginLeft: 15.0,
        marginTop: 15.0
    }
});

export default ResultsShow;