import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import PopularItem from './PopularItem'

const defaultState = [
    {
        title: 'Copenhagen',
        location: 'Denmark',
        image: require('../../../../../assets/images/countries/denmark.jpeg'),
        id: 1
    },
    {
        title: 'Frankfurt',
        location: 'Germany',
        image: require('../../../../../assets/images/countries/germany.jpg'),
        id: 2
    },
    {
        title: 'Gdansk',
        location: 'Poland',
        image: require('../../../../../assets/images/countries/poland.jpg'),
        id: 3
    },
    {
        title: 'Prague',
        location: 'Czech Republic',
        image: require('../../../../../assets/images/countries/czech-republic.jpg'),
        id: 4
    }
]

const PopularSection = () => {
    const [popularItemsList, setPopularItemsList] = useState(defaultState)

    return (
        <View style={styles.section}>
            <Text style={styles.headerText}>Popular</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
      marginTop: 25,
      marginHorizontal: 10 
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