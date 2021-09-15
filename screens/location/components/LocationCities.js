import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const defaultState = [
    {
        country: 'Germany',
        citiesArray: [
            {
                name: 'Berlin',
                image: require('../../../assets/images/cities/germany/berlin.jpg'),
                id: 1
            },
            {
                name: 'Cologne',
                image: require('../../../assets/images/cities/germany/cologne.webp'),
                id: 2
            },
            {
                name: 'Frankfurt',
                image: require('../../../assets/images/cities/germany/frankfurt.jpg'),
                id: 3
            },
            {
                name: 'Leipzig',
                image: require('../../../assets/images/cities/germany/leipzig.jpg'),
                id: 4
            },
            {
                name: 'Munich',
                image: require('../../../assets/images/cities/germany/munich.jpg'),
                id: 5
            }
        ]
    },
    {
        country: 'Sweden',
        citiesArray: [
            {
                name: 'Stockholm',
                image: require('../../../assets/images/cities/sweden/stockholm.jpeg'),
                id: 1
            },
            {
                name: 'Uppsala',
                image: require('../../../assets/images/cities/sweden/uppsala.jpg'),
                id: 2
            },
            {
                name: 'Gothenburg',
                image: require('../../../assets/images/cities/sweden/gothenburg.jpg'),
                id: 3
            },
            {
                name: 'Helsingborg',
                image: require('../../../assets/images/cities/sweden/helsingborg.jpg'),
                id: 4
            }
        ]
    }
]

const LocationCities = () => {
    const [locations, setLocations] = useState(defaultState)

    return (
        <View>
            {locations.map( selected => {
                if (selected.country === 'Germany') {
                    return selected.citiesArray.map( city => (
                        <View style={styles.item} key={city.id}>
                            <Image style={styles.image} source={city.image}/>
                            <View style={styles.textArea}>
                                <Text style={styles.upperText}>{city.name}</Text>
                                <Text style={styles.lowerText}>{selected.country}</Text>
                            </View>
                        </View>
                    ))
                }
            })}
        </View>
    )
}

export default LocationCities

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        height: 220,
        borderRadius: 4,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 130,
        borderRadius: 4
    },
    textArea: {
        justifyContent: 'space-around',
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 10
    },
    upperText: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    lowerText: {
        marginTop: 8,
        color: 'gray'
    }
})
