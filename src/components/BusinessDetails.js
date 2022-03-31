import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BusinessDetails = ({ business }) => {
    return (
        <View style={styles.conatainer}>
            <Image style={styles.image} source={{ uri: business.image_url }}/>
            <Text style={styles.name}>{business.name}</Text>
            <Text>{business.rating} Stars, {business.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conatainer: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default BusinessDetails;