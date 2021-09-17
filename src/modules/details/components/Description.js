import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
        icon: 'ios-ice-cream-outline',
        text: 'Free Icecream'
    },
    {
        icon: 'ios-restaurant-outline',
        text: 'Restaurants'
    },
    {
        icon: 'ios-game-controller-outline',
        text: 'Entertainment'
    },
    {
        icon: 'ios-cash-outline',
        text: 'Expencive'
    },
]

const RenderFeatures = ({icon, text}) => (
    <View style={styles.featContainer}>
        <Icon name={icon} size={20} color='gray'/>
        <Text style={styles.featText}>{text}</Text>
    </View>
)

const Description = () => (
    <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.city}>Copenhagen</Text>
                <Text style={styles.country}>Denmark</Text>
                <Text style={styles.rating}>Rating</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={DATA}
                renderItem={ ({item}) => <RenderFeatures icon={item.icon} text={item.text}/>}
            />
        </View>
        <View>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet consectetur tincidunt. Pellentesque eget egestas turpis.</Text>
        </View>
    </View>
)

export default Description

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    city: {
        fontWeight: 'bold',
        fontSize: 24
    },
    country: {
        fontSize: 20,
        color: 'gray'
    },
    rating: {
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    descriptionText: {
        color: 'gray'
    },
    featText: {
        color: 'gray',
        fontSize: 14
    },
    featContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        width: 100,
        height: 50,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 10,
        borderRadius: 10
    }
})
