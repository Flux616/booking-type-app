import React from 'react'
import { useSelector } from 'react-redux'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import PopularCity from './components/PopularCity'
import NearestCity from './components/NearestCity'

const SuggestionsSection = () => {
    const locations = useSelector(state => state.locations)

    return (
    <View>
        <View style={styles.section}>
            <Text style={styles.headerText}>Popular</Text>
            <FlatList
                horizontal
                style={styles.container}
                data={locations}
                renderItem={PopularCity}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        <View style={styles.section}>
            <Text style={styles.headerText}>Nearest</Text>
            {locations.map( item => (
                <NearestCity
                    key={item.id}
                    image={item.image}
                    country={item.country}
                    city={item.city}
                    price={item.price}
                />
            ))}
        </View>
    </View>
)}

export default SuggestionsSection

const styles = StyleSheet.create({
    section: {
      marginTop: 20
    },
    container: {
      margin: 10,
      flexDirection: 'row',
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