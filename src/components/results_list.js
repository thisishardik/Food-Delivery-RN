import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetail from '../components/results_detail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {

    if(!results.length){
        return null;
    }
    
    return (
        <View>
            <Text style = {styles.title}>{title}</Text>
            <FlatList 
                keyExtractor = {(result) => result['id']}
                horizontal = {true}
                data = {results}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => {
                    return (
                    <TouchableOpacity onPress = {() => {
                        navigation.navigate("Results",{ id: item['id'] });
                    }}>
                        <ResultsDetail result = {item} />
                    </TouchableOpacity>
                    
                    );
                }}
            />
        </View>      
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20.0,
        fontWeight: "700",
        marginLeft: 15.0,
        paddingBottom: 15.0,
    }
});

export default withNavigation(ResultsList);