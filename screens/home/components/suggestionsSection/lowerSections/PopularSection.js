import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import PopularItem from './PopularItem'

const defaultState = [
    {
        title: 'Copenhagen',
        location: 'Denmark',
        image: require('../../../../../assets/images/countries/denmark.jpeg'),
        id: 1,
        rating: '★ 4.7'
    },
    {
        title: 'Frankfurt',
        location: 'Germany',
        image: require('../../../../../assets/images/countries/germany.jpg'),
        id: 2,
        rating: '★ 4.4'
    },
    {
        title: 'Gdansk',
        location: 'Poland',
        image: require('../../../../../assets/images/countries/poland.jpg'),
        id: 3,
        rating: '★ 4.3'
    },
    {
        title: 'Prague',
        location: 'Czech Republic',
        image: require('../../../../../assets/images/countries/czech-republic.jpg'),
        id: 4,
        rating: '★ 4.6'
    }
]

const PopularSection = () => {

    return (
        <View style={styles.section}>
            <Text style={styles.headerText}>Popular</Text>
            <FlatList
                horizontal
                style={styles.container}
                data={defaultState}
                renderItem={PopularItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
      marginTop: 25
    },
    container: {
      margin: 10,
      flexDirection: 'row'
    },
    headerText: {
        marginLeft: 10,
        fontWeight: 'bold'
    }
  });

export default PopularSection