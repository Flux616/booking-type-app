import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { GalleryImageProp } from '../../../config/navigation/types'

const ImageGrid = ({path, key}: GalleryImageProp) => (
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={path} key={key}/>
    </View>
)

export default ImageGrid

const styles = StyleSheet.create({
    imageContainer: {
        width: 75,
        height: 75
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius: 6
    }
})
