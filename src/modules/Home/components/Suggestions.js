import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import PopularCity from './PopularCity';
import NearestCity from './NearestCity';

const SuggestionsSection = () => {
    const locations = useSelector(state => state.locations);

    return (
        <View>
            <View style={styles.section}>
                <Text style={styles.headerText}>Popular</Text>
                <FlatList
                    horizontal
                    style={[styles.container, styles.shadowOverflow]}
                    data={locations}
                    renderItem={({ item }) => <PopularCity image={item.image} country={item.country} rating={item.rating} city={item.city}/>}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <ScrollView style={styles.section}>
                <Text style={styles.headerText}>Nearest</Text>
                <FlatList
                    style={styles.shadowOverflow}
                    scrollEnabled={false}
                    data={locations}
                    renderItem={({ item }) => <NearestCity image={item.image} country={item.country} city={item.city} price={item.price} />}
                />
            </ScrollView>
        </View>
    );
};

export default SuggestionsSection;

const styles = StyleSheet.create({
    section: {
        marginTop: 20
    },
    container: {
        margin: 10,
        flexDirection: 'row'
    },
    headerText: {
        marginLeft: 10,
        fontWeight: 'bold'
    },
    shadowOverflow: {
        overflow: 'visible'
    }
});