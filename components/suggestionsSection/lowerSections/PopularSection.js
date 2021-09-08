import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import PopularItem from './PopularItem'

const defaultState = [
    {
        title: 'Copenhagen',
        location: 'Denmark',
        image: require('../../../assets/images/cities/copenhagen.jpeg')
    },
    {
        title: 'Frankfurt',
        location: 'Germany',
        image: require('../../../assets/images/cities/frankfurt.jpg')
    },
    {
        title: 'Gdansk',
        location: 'Poland',
        image: require('../../../assets/images/cities/gdansk.jpg')
    },
    {
        title: 'Prague',
        location: 'Czech Republic',
        image: require('../../../assets/images/cities/prague.jpg')
    }
]

const PopularSection = () => {

    const [popularItemsList, setPopularItemsList] = useState(defaultState)

    return (
        <View style={styles.section}>
            <Text style={{fontWeight: 'bold'}}>Popular</Text>
            <ScrollView 
              style={styles.container} 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
                {popularItemsList.map( item => {
                    return (
                        <PopularItem
                          image={item.image}
                          title={item.title}
                          location={item.location}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
      marginTop: 25,
      marginLeft: 20 
    },
    container: {
      margin: 10,
      flexDirection: 'row' 
    }
  });

export default PopularSection