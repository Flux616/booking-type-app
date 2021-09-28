import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Info from './components/Info';
import Description from './components/Description';
import Preview from './components/Preview';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DetailsScreenRouteProp } from '../../config/navigation/types';

type Props = {
    route: DetailsScreenRouteProp
}

const Details: React.FC<Props> = ({ route }) => {
    const {rating, city, country, image, price} = route.params;

    return (
        <View style={styles.wrapper}>
            <SafeAreaView  style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Preview image={image}/>
                    <Info rating={rating} city={city} country={country}/>
                    <Description/>
                    <Gallery/>
                </ScrollView>
                <Footer price={price}/>
            </SafeAreaView>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 20
    }
});