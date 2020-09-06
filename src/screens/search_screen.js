import React, { useState, useEffect } from 'react';
import { Text, StyleSheet,View, ScrollView } from 'react-native';
import SearchBar from '../components/search_bar';
import useResults from '../hooks/useResult';
import ResultsList from '../components/results_list';

const SearchScreen = () => {
    
    const[term, setTerm] = useState("");
    const [searchAPI, results, errorMessage] = useResults();    
    console.log(results);

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result['price'] === price;
        });
    };

    return (
        <View style = {{flex: 1}}>
            <SearchBar      
                term = {term} 
                onTermChange = {(newTerm) => setTerm(newTerm)}
                onTermSubmitted = {() =>  searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null} 
            <Text style = {{marginLeft: 20.0, marginTop: 10.0, paddingBottom: 15.0, fontSize: 18.0, fontWeight: "500"}}>We have found {results.length} results.</Text>
            <ScrollView>
                <ResultsList
                    
                    results = {filterResultsByPrice('$')} 
                    title = "Cost Effective"/>  
             <ResultsList 
                
                results = {filterResultsByPrice('$$')}
                title = "Bit Pricier"/>
            <ResultsList 
                
                results = {filterResultsByPrice('$$$')}
                title = "Big Spender" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE'
    }
});

export default SearchScreen;