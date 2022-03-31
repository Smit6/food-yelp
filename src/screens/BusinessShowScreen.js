import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';

const BusinessShowScreen = ({navigation}) => {
    const [business, setBusiness] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const id = navigation.getParam('id');

    console.log(business)

    const getBusiness = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setBusiness(response.data)
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Something went wrong');
            console.log(error);
        }
    }

    useEffect(() => {
        getBusiness(id);
    }, []);

    if (!business)
        return null;

    return (
        <>
            <Text>{business.name}</Text>
            <FlatList
                data={business.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }}/>
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default BusinessShowScreen;