import React from "react"
import { View, TextInput, StyleSheet } from "react-native"


const HomeSearchBar = () => {
    
    return (
        <View style={styles.container}>
            <TextInput
              style={styles.searchInput}
              placeholder={'Search here...'}
              autoCapitalize={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 20,
        marginHorizontal: 15
    },
    searchInput: {
        width: '100%',
        backgroundColor: '#e6e6fa',
        borderRadius: 6,
        height: 50,
        paddingHorizontal: 15
    }
})

export default HomeSearchBar