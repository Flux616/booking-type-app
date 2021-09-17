import React from 'react'
import { StyleSheet, View } from 'react-native'
import Description from './components/Description'
import Preview from './components/Preview'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { SafeAreaView } from 'react-native-safe-area-context'

const Details = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Preview />
            <Description />
            <Gallery />
            <Footer />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    }
})
