import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Description = () => (
    <View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet consectetur tincidunt. Pellentesque eget egestas turpis.</Text>
    </View>
);

export default Description;

const styles = StyleSheet.create({
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    descriptionText: {
        color: '#BFBFBF'
    },
});
