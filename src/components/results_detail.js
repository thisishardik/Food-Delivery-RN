import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ResultsDetail = ({result}) => {
    return (
        <View style = {styles.container}>
            <Image
                style = {styles.image} 
                source = {{uri: result['image_url']}}
            />
            <Text style = {styles.title}>{result['name']}</Text>
            <Text style = {styles.review}>{result['rating']} Stars, {result['review_count']} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    review: {
        marginLeft: 0.0,
        fontSize: 15.0,
    },
    container: {
        marginLeft: 15.0,
        paddingBottom: 15.0
    },
    image: {
        width: 250.0,
        height: 150.0,
        borderRadius: 5.0,
        paddingRight: 10.0,
    },
    title: {
        marginLeft: 0.0,
        fontWeight: "600",
        fontSize: 20.0,
        paddingRight: 10.0
    }
});

export default ResultsDetail;