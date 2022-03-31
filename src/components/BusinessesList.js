import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';

import BusinessDetails from './BusinessDetails';

const BusinessesList = ({ businesses, title, navigation }) => {
    if (!businesses.length)
        return null;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={businesses}
                keyExtractor={(business) => business.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('BusinessShow', { id: item.id })}>
                           <BusinessDetails business={item} />
                        </TouchableOpacity>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
            {/* <Text>Businesses: {businesses.length}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(BusinessesList);