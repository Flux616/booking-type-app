import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NearestItem from './NearestItem'

const defaultState = [
    {
        title: 'Stockholm',
        location: 'Sweden',
        image: require('../../../../../assets/images/countries/sweden.jpeg'),
<<<<<<< HEAD
        id: 1,
        rating: '★ 4.5',
        price: '150€/Day'
=======
        id: 1
>>>>>>> main
    },
    {
        title: 'Amsterdam',
        location: 'Netherlands',
        image: require('../../../../../assets/images/countries/netherlands.jpg'),
<<<<<<< HEAD
        id: 2,
        rating: '★ 4.6',
        price: '130€/Day'
=======
        id: 2
>>>>>>> main
    },
    {
        title: 'London',
        location: 'United Kingdom',
        image: require('../../../../../assets/images/countries/uk.jpg'),
<<<<<<< HEAD
        id: 3,
        rating: '★ 4.1',
        price: '115€/Day'
=======
        id: 3
>>>>>>> main
    },
    {
        title: 'Budapest',
        location: 'Hungary',
        image: require('../../../../../assets/images/countries/hungary.jpg'),
<<<<<<< HEAD
        id: 4,
        rating: '★ 4.2',
        price: '90€/Day'
=======
        id: 4
>>>>>>> main
    }
]

const NearestSection = () => {
    const [nearestItemsList, setNearestItemsList] = useState(defaultState)

    return (
        <View style={styles.section}>
            <Text style={styles.headerText}>Nearest</Text>
            {nearestItemsList.map( item => (
                <NearestItem
<<<<<<< HEAD
                    rating={item.rating}
=======
>>>>>>> main
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    location={item.location}
<<<<<<< HEAD
                    price={item.price}
=======
>>>>>>> main
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create ({
    section: {
<<<<<<< HEAD
        marginTop: 20
=======
        marginTop: 10,
        marginLeft: 20 
>>>>>>> main
    },
    headerText: {
        fontWeight: 'bold'
    }
})

export default NearestSection