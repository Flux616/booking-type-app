import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const defaultState = [
    {
        country: 'Germany',
        citiesArray: [
            {
                name: 'Berlin',
                image: require('../../../assets/images/cities/germany/berlin.jpg')
            },
            {
                name: 'Cologne',
                image: require('../../../assets/images/cities/germany/cologne.webp')
            },
            {
                name: 'Frankfurt',
                image: require('../../../assets/images/cities/germany/frankfurt.jpg')
            },
            {
                name: 'Leipzig',
                image: require('../../../assets/images/cities/germany/leipzig.jpg')
            },
            {
                name: 'Munich',
                image: require('../../../assets/images/cities/germany/munich.jpg')
            }
        ]
    },
    {
        country: 'Sweden',
        citiesArray: [
            {
                name: 'Stockholm',
                image: require('../../../assets/images/cities/sweden/stockholm.jpeg')
            },
            {
                name: 'Uppsala',
                image: require('../../../assets/images/cities/sweden/uppsala.jpg')
            },
            {
                name: 'Gothenburg',
                image: require('../../../assets/images/cities/sweden/gothenburg.jpg')
            },
            {
                name: 'Helsingborg',
                image: require('../../../assets/images/cities/sweden/helsingborg.jpg')
            }
        ]
    }
]

const LocationCities = () => {

    const [locations, setLocations] = useState(defaultState)

    return (
        <View>
            { 
                locations.map( opt => {
                    if (opt.country === 'Germany') { 
                        return opt.citiesArray.map( city => {
                            return (
                            <View style={styles.item}>
                                <Image style={styles.image} source={city.image}/>
                                <View style={styles.textArea}>
                                    <Text style={styles.upperText}>{city.name}</Text>
                                    <Text style={styles.lowerText}>{opt.country}</Text>
                                </View>
                            </View>
                            )
                        })
                    }
                })
            }
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
