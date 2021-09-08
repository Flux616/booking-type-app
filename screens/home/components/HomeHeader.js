import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.upperText}>Welcome Buddy</Text>
                <Text style={styles.lowerText}>Start search your trip!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/avatar.jpg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 60,
      marginHorizontal: 20,
      justifyContent: "space-between",
      flexDirection: "row"
    },
    upperText: {
        marginTop: 5,
        color: "deepskyblue",
        fontSize: 20,
        fontWeight: "bold"
    },
    lowerText: {
        marginTop: 10,
        color: "deepskyblue"
    },
    imageContainer: {

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
  });

export default Header