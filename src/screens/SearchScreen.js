import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import BusinessesList from '../components/BusinessesList';

import useBusinesses from '../hooks/useBusinesses';

const SearchScreen = () => {
    // console.log(props)

    const [term, setTerm] = useState('');
    const [searchAPI, businesses, errorMessage] = useBusinesses();

    const filterBusinessesByPrice = (price) => {
        return businesses.filter((business) => {
            return business.price === price;
        })
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
                style={styles.bar}
            />
            {
                errorMessage
                    ? <Text>{errorMessage}</Text>
                    : null
            }
            <ScrollView>
                <BusinessesList
                    businesses={filterBusinessesByPrice('$')}
                    title='Cost Effective'
                />
                <BusinessesList
                    businesses={filterBusinessesByPrice('$$')}
                    title='Bit Pricier'
                />
                <BusinessesList
                    businesses={filterBusinessesByPrice('$$$')}
                    title='Big Spender'
                />
                <BusinessesList
                    businesses={filterBusinessesByPrice('$$$$')}
                    title='Costly'
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;