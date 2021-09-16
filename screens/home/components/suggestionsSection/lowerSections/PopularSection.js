import React, {useState} from 'react'
<<<<<<< HEAD
import {View, Text, StyleSheet, FlatList} from 'react-native'
=======
import {ScrollView, View, Text, StyleSheet} from 'react-native'
>>>>>>> main
import PopularItem from './PopularItem'

const defaultState = [
    {
        title: 'Copenhagen',
        location: 'Denmark',
        image: require('../../../../../assets/images/countries/denmark.jpeg'),
<<<<<<< HEAD
        id: 1,
        rating: '★ 4.7'
=======
        id: 1
>>>>>>> main
    },
    {
        title: 'Frankfurt',
        location: 'Germany',
        image: require('../../../../../assets/images/countries/germany.jpg'),
<<<<<<< HEAD
        id: 2,
        rating: '★ 4.4'
=======
        id: 2
>>>>>>> main
    },
    {
        title: 'Gdansk',
        location: 'Poland',
        image: require('../../../../../assets/images/countries/poland.jpg'),
<<<<<<< HEAD
        id: 3,
        rating: '★ 4.3'
=======
        id: 3
>>>>>>> main
    },
    {
        title: 'Prague',
        location: 'Czech Republic',
        image: require('../../../../../assets/images/countries/czech-republic.jpg'),
<<<<<<< HEAD
        id: 4,
        rating: '★ 4.6'
=======
        id: 4
>>>>>>> main
    }
]

const PopularSection = () => {
<<<<<<< HEAD
=======
    const [popularItemsList, setPopularItemsList] = useState(defaultState)
>>>>>>> main

    return (
        <View style={styles.section}>
            <Text style={styles.headerText}>Popular</Text>
<<<<<<< HEAD
            <FlatList
                horizontal
                style={styles.container}
                data={defaultState}
                renderItem={PopularItem}
                showsHorizontalScrollIndicator={false}
            />
=======
            <ScrollView 
              style={styles.container} 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
                {popularItemsList.map( item => (
                    <PopularItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        location={item.location}
                    />
                ))}
            </ScrollView>
>>>>>>> main
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
<<<<<<< HEAD
      marginTop: 25
    },
    container: {
      margin: 10,
      flexDirection: 'row'
=======
      marginTop: 25,
      marginHorizontal: 10 
    },
    container: {
      margin: 10,
      flexDirection: 'row' 
>>>>>>> main
    },
    headerText: {
        marginLeft: 10,
        fontWeight: 'bold'
    }
  });

export default PopularSection