import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import NearestItem from './NearestItem'

const defaultState = [
    {
        title: 'Stockholm',
        location: 'Sweden',
        image: require('../../../../../assets/images/countries/sweden.jpeg'),
        id: 1
    },
    {
        title: 'Amsterdam',
        location: 'Netherlands',
        image: require('../../../../../assets/images/countries/netherlands.jpg'),
        id: 2
    },
    {
        title: 'London',
        location: 'United Kingdom',
        image: require('../../../../../assets/images/countries/uk.jpg'),
        id: 3
    },
    {
        title: 'Budapest',
        location: 'Hungary',
        image: require('../../../../../assets/images/countries/hungary.jpg'),
        id: 4
    }
]

const NearestSection = () => {

    const [nearestItemsList, setNearestItemsList] = useState(defaultState)

    return (
        <View style={styles.section}>
            <Text style={{fontWeight: 'bold'}}>Nearest</Text>
            {nearestItemsList.map( item => {
                return (
                <NearestItem
                  image={item.image}
                  title={item.title}
                  location={item.location}
                />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create ({
    section: {
        marginTop: 10,
        marginLeft: 20 
      }
})

export default NearestSection