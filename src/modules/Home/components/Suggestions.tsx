import React from 'react';
import { StyleSheet, Text, FlatList, SectionList } from 'react-native';
import PopularCity from './PopularCity';
import NearestCity from './NearestCity';
import { Location } from '../../../config/navigation/types';
import LocationsStore from '../../../config/stores/locations';

const Suggestions = () => {
    const locations = LocationsStore.locations

    type SingleSection = {
        id: string,
        title: string,
        data: Array<Location[]>,
        renderBlock: (item: Location[]) => React.ReactElement
    }

    type SectionsType = Array<SingleSection>

    const sections: SectionsType = [
        {
            id: 'popular',
            title: 'Popular',
            data: [locations],
            renderBlock: (item) => <FlatList<Location>
                showsHorizontalScrollIndicator={false}
                horizontal
                style={[styles.container, styles.shadowOverflow]}
                data={item}
                renderItem={({ item }) => <PopularCity image={item.image} country={item.country} rating={item.rating} city={item.city} price={item.price}/>}
            />
        },
        {
            id: 'nearest',
            title: 'Nearest',
            data: [locations],
            renderBlock: (item) => <FlatList
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                contentContainerStyle={{flex: 1}}
                scrollEnabled={false}
                style={[styles.shadowOverflow, styles.verticalList]}
                data={item}
                renderItem={({ item }) => <NearestCity image={item.image} country={item.country} city={item.city} price={item.price} rating={item.rating} />}
            />
        }
    ];

    return (
        <SectionList
            removeClippedSubviews={false}
            sections={sections}
            renderItem={({ section: {renderBlock}, item }) => renderBlock(item)}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.headerText}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Suggestions;

const styles = StyleSheet.create({
    section: {
        marginTop: 20
    },
    container: {
        margin: 10,
        flexDirection: 'row'
    },
    headerText: {
        paddingTop: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    shadowOverflow: {
        overflow: 'visible'
    },
    verticalList: {
        paddingBottom: 150
    }
});