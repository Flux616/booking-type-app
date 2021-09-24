import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, FlatList, SectionList } from 'react-native';
import PopularCity from './PopularCity';
import NearestCity from './NearestCity';

const Suggestions = () => {
    const locations = useSelector(state => state.locations);

    const sections = [
        {
            id: 'popular',
            title: 'Popular',
            data: [locations],
            renderBlock: (item) => <FlatList
                horizontal
                style={[styles.container, styles.shadowOverflow]}
                data={item}
                renderItem={({ item }) => <PopularCity image={item.image} country={item.country} rating={item.rating} city={item.city}/>}
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
                renderItem={({ item }) => <NearestCity image={item.image} country={item.country} city={item.city} price={item.price} />}
            />
        }
    ];

    return (
        <SectionList
            removeClippedSubviews={false}
            sections={sections}
            keyExtractor={(item, index) => item + index}
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